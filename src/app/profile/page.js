"use client";

import Navbar from "../components/EventHeader";
import { useState, useRef, useEffect, use } from "react";
import {
  EDIT_PROFILE_URL,
  STUDENT_PROFILE_URL,
  BUY_PASSPORT_DUMMY_PAGE_URL,
  payU_Key,
  payU_Action,
  ALL_TRANSACTION_URL,
  GET_REGISTERED_EVENTS,
} from "../_util/constants";
import EventCard from "../events/components/EventCard";
import { FaAngleDoubleDown } from "react-icons/fa";

import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";

import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createHash } from "crypto";
import Link from "next/link";
import { Toast } from "primereact/toast";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import ToastAlert from "../_util/ToastAlerts";
import { FaIndianRupeeSign } from "react-icons/fa6";
import WebGLApp from "../bg/WebGLApp";

import TextField from "@mui/material/TextField";
import QRCode from "react-qr-code";

export default function Register() {
  const [name, setName] = useState(
    secureLocalStorage.getItem("studentFullName")
  );
  const [email, setEmail] = useState(
    secureLocalStorage.getItem("registerEmail")
  );
  const [registerToken, setRegisterToken] = useState(
    secureLocalStorage.getItem("registerToken")
  );
  const [phone, setPhone] = useState(
    secureLocalStorage.getItem("studentPhone")
  );
  const [collegeName, setCollegeName] = useState(
    secureLocalStorage.getItem("studentCollegeName")
  );
  const [collegeCity, setCollegeCity] = useState(
    secureLocalStorage.getItem("studentCollegeCity")
  );
  const [isAmrita, setisAmrita] = useState(
    secureLocalStorage.getItem("isAmritaCBE")
  );
  const [loading, setLoading] = useState(false);
  const [studentID, setStudentID] = useState(
    secureLocalStorage.getItem("studentId")
  );
  const [enableUpdateProfile, setEnableUpdate] = useState(true);

  const [eventsData, setEventsData] = useState(null);

  const router = useRouter();

  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 1000, // Adjust the value as needed for your desired scroll distance
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(STUDENT_PROFILE_URL, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${registerToken}`,
          },
        });

        const data = await response.json();
        if (response.status === 200) {
          secureLocalStorage.setItem("studentFullName", data.studentFullName);
          secureLocalStorage.setItem("studentPhone", data.studentPhone);
          secureLocalStorage.setItem(
            "studentCollegeCity",
            data.studentCollegeCity
          );
          secureLocalStorage.setItem(
            "studentCollegeName",
            data.studentCollegeName
          );
          secureLocalStorage.setItem(
            "studentAccountStatus",
            data.studentAccountStatus
          );
          console.log(secureLocalStorage.getItem("studentAccountStatus"));
          return;
        } else if (response.status === 400) {
          secureLocalStorage.clear();
          ToastAlert("error", "Error", "Access restricted!", toastRef);
        } else if (response.status === 401) {
          ToastAlert(
            "error",
            "Unauthorized Access",
            "Please login and try again.",
            toastRef
          );
          secureLocalStorage.clear();
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else if (response.status === 500) {
          ToastAlert(
            "error",
            "Internal Server Error",
            "Oops! Please try again.",
            toastRef
          );
          return;
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getProfile();
  }, [collegeCity, collegeName, router]); // Calling the function once on mount

  useEffect(() => {
    const getTransaction = async () => {
      try {
        const response = await fetch(ALL_TRANSACTION_URL, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${secureLocalStorage.getItem(
              "registerToken"
            )}`,
          },
        });
        const data = await response.json();
        console.log(data);
        if (response.status === 200) {
          if (data.PAY_U_TRANSACTIONS.length > 0) {
            setTransactionDetails(data);
          }
          return;
        }
      } catch (error) {
        setLoading(false);
      }
    };
    getTransaction();
    const getRegisteredEventsFunction = async () => {
      try {
        const response1 = await fetch(GET_REGISTERED_EVENTS, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${secureLocalStorage.getItem(
              "registerToken"
            )}`,
          },
        });
        const data = await response1.json();
        console.log(data);
        if (response1.status === 200) {
          console.log(data.EVENTS);
          setEventsData(data.EVENTS);
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };
    getRegisteredEventsFunction();
  }, [router]);

  const qrValue = `anokha://${studentID}`;
  const [dialogVisible, setDialogVisible] = useState(false);
  //Regular expression to check amrita mail
  const amritaRegex =
    /^[a-zA-Z0-9._%+-]+@(cb\.students\.amrita\.edu|cb\.amrita\.edu|av\.students\.amrita\.edu|av\.amrita\.edu)$/;
  const isAmritaMail = amritaRegex.test(email);

  const nameRegex = /^[a-zA-Z ]{1,25}$/;
  const collegeNameRegex = /^[a-zA-Z ,-]{1,100}$/;
  const collegeCityRegex = /^[a-zA-Z ,-]{1,100}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const isPhoneValid = phoneRegex.test(phone);
  const isNameValid = nameRegex.test(name);
  const isCollegeNameValid = collegeNameRegex.test(collegeName);
  const isCollegeCityValid = collegeCityRegex.test(collegeCity);

  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255, 59 / 255],
    color3: [15 / 255, 21 / 255, 39 / 255],
  });
  const toastRef = useRef(null);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const genSHA256 = (email) => {
    return createHash("sha256").update(email).digest("hex");
  };

  useEffect(() => {
    const nameCheck = name === secureLocalStorage.getItem("studentFullName");
    const phoneCheck = phone === secureLocalStorage.getItem("studentPhone");
    const collegeNameCheck =
      collegeName === secureLocalStorage.getItem("studentCollegeName");
    const collegeCityCheck =
      collegeCity === secureLocalStorage.getItem("studentCollegeCity");
    console.log(
      "name: ",
      nameCheck,
      "phone: ",
      phoneCheck,
      "ClgName: ",
      collegeNameCheck,
      "Clcity: ",
      collegeCityCheck
    );
    console.log("##");
    setEnableUpdate(
      nameCheck && phoneCheck && collegeNameCheck && collegeCityCheck
    );
  }, [name, phone, collegeCity, collegeName, router]);

  // Confirm edit profile - changes
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await fetch(EDIT_PROFILE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
        body: JSON.stringify({
          studentFullName: name,
          studentPhone: phone,
          studentCollegeName: collegeName,
          studentCollegeCity: collegeCity,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        ToastAlert(
          "success",
          "Successful Update",
          "Your profile has been updated!",
          toastRef
        );
        secureLocalStorage.setItem("studentFullName", name);
        secureLocalStorage.setItem("studentPhone", phone);
        secureLocalStorage.setItem("studentCollegeCity", collegeCity);
        secureLocalStorage.setItem("studentCollegeName", collegeName);
        return;
      } else if (response.status === 400) {
        ToastAlert(
          "error",
          "Invalid Request",
          "The details are invalid",
          toastRef
        );
        return;
      } else if (response.status === 401) {
        ToastAlert(
          "error",
          "Unauthorized Access",
          "Operation not permitted",
          toastRef
        );
        secureLocalStorage.clear();
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else if (response.status === 500) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef
        );
        return;
      } else if (
        typeof data === "undefined" ||
        data.message !== undefined ||
        data.message !== null
      ) {
        ToastAlert(
          "error",
          "Error",
          "Updation unsuccessful! Try again.",
          toastRef
        );
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handlePassportClick = async () => {
    const response = await fetch(BUY_PASSPORT_DUMMY_PAGE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secureLocalStorage.getItem("registerToken")}`,
      },
    });
    const data = await response.json();

    if (response.status === 200) {
      const payUData = {
        key: payU_Key,
        txnid: data["txnid"],
        amount: data["amount"],
        productinfo: data["productinfo"],
        firstname: data["firstname"],
        email: data["email"],
        phone: data["phone"],
        surl: data["surl"],
        furl: data["furl"],
        hash: data["hash"],
      };

      const payUForm = document.createElement("form");
      payUForm.method = "post";
      payUForm.action = payU_Action;

      for (const key in payUData) {
        if (payUData.hasOwnProperty(key)) {
          const hiddenField = document.createElement("input");
          hiddenField.type = "hidden";
          hiddenField.name = key;
          hiddenField.value = payUData[key];

          payUForm.appendChild(hiddenField);
        }
      }

      document.body.appendChild(payUForm);

      payUForm.submit();

      //setMessage("Called PayU API to make payment.");
    } else if (response.status === 400) {
      secureLocalStorage.clear();
      ToastAlert("error", "Error", data.MESSAGE, toastRef);
    } else if (response.status === 401) {
      ToastAlert(
        "error",
        "Unauthorized Access",
        "Please login and try again.",
        toastRef
      );
      secureLocalStorage.clear();
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else if (response.status === 500) {
      ToastAlert(
        "error",
        "Internal Server Error",
        "Oops! Please try again.",
        toastRef
      );
      return;
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#192032]">
      <WebGLApp colors={webGLColors} />

      <div className="block space-y-24 md:space-y-10">
        <Navbar />
        <div className="relative min-h-screen">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 ">
            <Toast ref={toastRef} position="bottom-center" />
            <div className="w-full md:h-[20px] lg:h-[60px]"></div>
            <div className="w-full rounded-[24px] bg-clip-padding backdrop-blur-xl bg-opacity-80 md:-top-2 lg:w-3/4 xl:p-0 bg-white">
              <div className="p-1 rounded-full mt-5 ml-auto mr-auto flex justify-center">
                {/* <Image
                  className=""
                  alt="Travis Howard"
                  src={
                    "https://www.gravatar.com/avatar/" +
                    genSHA256(email ?? "anokhapr@cb.amrita.edu") +
                    ".jpg?s=200&d=robohash"
                  }
                  width={80}
                  height={80}
                /> */}
                <div>
                  <Avatar
                    shape="circle"
                    alt="Travis Howard"
                    image={
                      "https://www.gravatar.com/avatar/" +
                        genSHA256(email ?? "anokhapr@cb.amrita.edu") +
                        ".jpg?s=200&d=robohash"
                    }
                    size="xlarge"
                  />
              </div>
              </div>
              <div className="w-full flex flex-col justify-center px-6 py-0 mb-4 mt-0 md:space-y-6 sm:p-8">
                <h1 className="text-xl mx-auto top-10 font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Profile
                </h1>
                <div className="space-y-4 md:space-y-6 flex flex-col md:flex-row md:gap-10 justify-center">
                  <div className="flex flex-col justify-center flex-1 space-y-8 md:border-r md:border-black md:pr-10 max-w-600">
                    <div id="Fields">
                      <TextField
                        error={!isNameValid && name != ""}
                        placeholder={"Enter Name"}
                        label="Name"
                        value={name}
                        helperText={
                          !isNameValid && name != ""
                            ? "Should not contain special characters"
                            : ""
                        }
                        sx={{
                          width: "100%",
                          borderRadius: 5,
                        }}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div id="Fields">
                      <TextField
                        error={!isPhoneValid && phone != ""}
                        placeholder={"+91 99999 99999"}
                        label="Phone Number"
                        value={phone}
                        helperText={
                          !isPhoneValid && phone != ""
                            ? "Should contain 10 digits"
                            : ""
                        }
                        sx={{
                          width: "100%",
                          borderRadius: 5,
                        }}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div id="Fields">
                      <div>
                        <TextField
                          error={!isCollegeNameValid && collegeName != ""}
                          placeholder="Enter College Name"
                          label="College Name"
                          value={collegeName}
                          helperText={
                            !isCollegeNameValid && collegeName != ""
                              ? "Should contain only alphabets"
                              : ""
                          }
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          onChange={(e) => {
                            setCollegeName(e.target.value);
                          }}
                          required
                          disabled={isAmrita}
                        />
                      </div>
                      <div id="Fields" className="mt-8 mb-8">
                        <TextField
                          error={!isCollegeCityValid && collegeCity != ""}
                          placeholder="Enter College City"
                          label="College City"
                          value={collegeCity}
                          helperText={
                            !isCollegeCityValid && collegeCity != ""
                              ? "Should contain only alphabets"
                              : ""
                          }
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          onChange={(e) => {
                            setCollegeCity(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div id="Fields">
                        <TextField
                          placeholder="Enter Email"
                          label="Email"
                          value={email}
                          sx={{
                            width: "100%",
                            borderRadius: 5,
                            borderWidth: 5,
                          }}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-8">
                    <div className="mx-auto">
                      {
                        <div>
                          <button
                            onClick={() => setDialogVisible(true)}
                            className={`w-[200px] mt-2 text-black bg-blue-600 mb-1 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed`}
                            disabled={transactionDetails === null}
                          >
                            View Transactions
                          </button>

                          <Dialog
                            modal
                            draggable={false}
                            visible={dialogVisible}
                            className="w-[80%] md:w-[650px] lg:w-[850px]"
                            header="Transaction History"
                            onHide={() => setDialogVisible(false)}
                          >
                            <div className="m-0 ">
                              {transactionDetails &&
                                transactionDetails.PAY_U_TRANSACTIONS.map(
                                  (transaction) => (
                                    <div
                                      key={transaction.txnId}
                                      className="flex flex-col gap-y-2 md:flex-row my-5 border-2 rounded-md p-2 border-gray-600"
                                    >
                                      <div className="flex flex-col w-[60%] ">
                                        <div className="flex gap-x-3 items-center">
                                          <p className="text-[17px] font-bold">
                                            Transaction ID:
                                          </p>
                                          <p className="text-[17px]">
                                            {transaction.txnId}
                                          </p>
                                        </div>

                                        <div className="flex gap-x-5 md:gap-x-10 items-center">
                                          <p className="text-[17px] font-bold">
                                            Amount:
                                          </p>
                                          <div className="border-2 flex items-center rounded-lg bg-green-100 font-bold text-black  px-2">
                                            <p className="text-[17px]">
                                              {transaction.amount}
                                            </p>
                                            <FaIndianRupeeSign className="" />
                                          </div>
                                        </div>

                                        <div className="flex gap-x-3 items-center">
                                          <p className="text-[17px] font-bold">
                                            Time of Transaction:
                                          </p>
                                          <p className="text-[17px]">
                                            {new Date(
                                              transaction.timeOfTransaction
                                            ).toLocaleString("en-IN", {
                                              timeZone: "Asia/Kolkata",
                                            })}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex gap-x-5 items-center justify-between">
                                        <div className="text-[17px] font-bold">
                                          Transaction Status:
                                        </div>
                                        {transaction.transactionStatus ===
                                        "0" ? (
                                          <Link
                                            href="/transactions/verify/[txnid]"
                                            as={`/transactions/verify/${transaction.txnId}`}
                                            className="text-[15px] h-10 px-4   w-[30%] flex rounded-md   text-black font-bold border-2 border-black  bg-[#ffbd03] items-center justify-center"
                                          >
                                            <div>Verify</div>
                                          </Link>
                                        ) : transaction.transactionStatus ===
                                          "1" ? (
                                          <div className="text-[15px] h-10 px-4   w-[30%] flex rounded-md   text-black font-bold border-2 border-black  bg-[#85f594] items-center justify-center">
                                            Success
                                          </div>
                                        ) : transaction.transactionStatus ===
                                          "2" ? (
                                          <div className="text-[15px] h-10 px-4   w-[30%] flex rounded-md   text-black font-bold border-2 border-black  bg-[#e25f5f] items-center justify-center">
                                            Failed
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </Dialog>
                        </div>
                      }
                    </div>
                    <div id="Fields">
                      <div
                        className={
                          secureLocalStorage.getItem("studentAccountStatus") ==
                          2
                            ? "sm:m-2 lg:m-6 ml-20 mr-20 p-8  flex justify-center bg-[#ffffff] rounded-2xl"
                            : "m-6 ml-20 mr-20 p-8 flex justify-center  bg-blue-300 text-center rounded-2xl"
                        }
                      >
                        {secureLocalStorage.getItem("studentAccountStatus") ==
                        2 ? (
                          <QRCode
                            className=""
                            size={256}
                            value={qrValue}
                            viewBox={`0 0 256 256`}
                          />
                        ) : secureLocalStorage.getItem(
                            "studentAccountStatus"
                          ) == 1 ? (
                          <div>
                            <div>
                              Buy passport to register for events and
                              participate <br /> (Opening Soon)
                            </div>
                            <button
                              className="px-4 py-2 rounded-xl mt-[30px] bg-blue-400 cursor-not-allowed"
                              onClick={() => handlePassportClick()}
                              disabled={true}
                            >
                              Buy Passport
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        onClick={() => handleUpdate()}
                        className="w-[200px] mt-3 text-black bg-[#f69c18] mb-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={enableUpdateProfile}
                      >
                        Confirm Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-12 mr-3 flex justify-end items-end">
        <div
          onClick={handleScrollMore}
          className="bg-white tex z-20 animate-bounce absolute md:top-[92%] sm:top-[90%] rounded-full px-3 py-2 flex items-center justify-center"
        >
          Registered Events <FaAngleDoubleDown className="ml-2" />
        </div>
      </div>
        <div className="mx-8 flex flex-col">
          <div className="text-center text-2xl z-10 py-3 mx-4 my-6 text-gray-50 ">
            REGISTERED EVENTS
          </div>
          <div className="grid mb-10 z-10 grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
            {eventsData && eventsData.length > 0 ? (
              eventsData.map((event) => {
                return (
                  <div key={event.eventId} className="justify-center mx-auto">
                    <Link href={`/events/${event.eventId}`}>
                      <EventCard
                        imgSrc={event.eventImageURL}
                        id={event.eventId}
                        eventName={event.eventName}
                        eventBlurb={event.eventDescription}
                        eventDesc={event.eventDescription}
                        date={event.eventDate}
                        time={event.eventTime}
                        goi={event.isGroup}
                        tags={event.tags}
                        price={event.eventPrice}
                        isAllowed={event.eventStatus === "1"}
                        isRegistered={"1"}
                        isStarred={event.isStarred}
                        maxseats={event.maxSeats}
                        seats={event.seatsFilled}
                        router={router}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
