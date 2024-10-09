"use client";
import Image from "next/image";
import WebGLApp from "../bg/WebGLApp";
import Navigationbar from "../components/EventHeader";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import {
  EVENT_DATA_URL,
  EVENT_REGISTER_STEP_ONE,
  payU_Action,
  payU_Key,
} from "../_util/constants";
import secureLocalStorage from "react-secure-storage";
import ToastAlert from "../_util/ToastAlerts";

const Lumere = () => {
  const [webGLColors, setWebGLColors] = useState({
    color1: [43 / 255, 30 / 255, 56 / 255],
    color2: [11 / 255, 38 / 255],
    color3: [15 / 255, 21 / 255],
  });

  const speakers = [
    {
      name: "Dr. Sudhanshu Mani",
      role: "Led the Vande Bharat Express project, enhancing Indian Railways with cutting-edge engineering.",
    },
    {
      name: "Major Deepak Iyer",
      role: "Former Special Forces officer focused on leadership development and resilience in business.",
    },
    {
      name: "Dushyant Dubey",
      role: "Social activist using digital platforms for grassroots change in mental health and abuse prevention.",
    },
    {
      name: "Kalki Subramaniam",
      role: "Transgender rights advocate employing art and media for social change in India.",
    },
    {
      name: "Veena Kumaravel",
      role: "Founder of Naturals, empowering women entrepreneurs through a successful salon franchise model.",
    },
  ];

  const handleScrollMore = () => {
    window.scrollTo({
      top: window.scrollY + 710,
      behavior: "smooth",
    });
  };

  const [eventData, setEventData] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPayUForm = async () => {
    try {
      const response = await fetch(EVENT_REGISTER_STEP_ONE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secureLocalStorage.getItem(
            "registerToken"
          )}`,
        },
        body: JSON.stringify({
          eventId: 141,
          totalMembers: 1,
          isMarketPlacePaymentMode: "0",
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log(200);
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

        // setMessage("Called PayU API to make payment.");
      } else if (response.status === 400) {
        console.log(data);
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      } else if (response.status === 401) {
        window.location.href = "/login";
      } else {
        ToastAlert("error", "Registration Failed", `${data.MESSAGE}`, toastRef);
      }
    } catch (err) {
      console.log(err);
      // ToastAlert("error", "Registration Failed", `Error Occured`, toastRef);
    }
  };

  useEffect(() => {
    fetch(`${EVENT_DATA_URL}/141`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secureLocalStorage.getItem("registerToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error: ${res.statusText}`);
        }
      })
      .then(async (data) => {
        if (data.MODE === "0") {
          secureLocalStorage.clear();
        }

        setEventData(data);
        setIsRegistered(data.isRegistered === "1" ? true : false);
        setIsOpen(data.seatsFilled >= data.maxSeats ? false : true);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      secureLocalStorage.getItem("isLoggedIn") == "0" ||
      secureLocalStorage.getItem("isLoggedIn") == undefined ||
      secureLocalStorage.getItem("isLoggedIn") == null
    ) {
      window.location.href = "/login";
      return;
    }
    confirm(
      "Are you ready to make the payment? (You'll be redirected to the payment gateway to complete the registration.)"
    ) && (await getPayUForm());
  };

  return (
    <main className="flex min-h-screen bg-[#192032] font-roobert text-md overflow-x-hidden">
      <WebGLApp colors={webGLColors} className="-z-10" />
      <div className="flex z-20 w-full flex-col">
        <Navigationbar />
        <div className="w-full pb-16">
          <div className="text-center mb-16 bg-cover bg-center h-screen flex flex-col justify-center items-center relative mx-0 sm:mx-auto">
            <div
              className="absolute inset-0 bg-cover bg-center z-[-1] w-full"
              style={{
                backgroundImage: "url('/images/lumierebg.jpeg')",
                filter: "brightness(50%)",
              }}
            />
            <div className="sm:w-[200px] md:w-[400px]">
              <Image
                src="/images/lumiere v2.png"
                alt="lumiere-logo"
                width={400}
                height={100}
                layout="responsive"
              />
            </div>
            <h1 className="text-8xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-white z-10">
              Tech Talk
            </h1>
            <p className="text-5xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white z-10">
              18th Oct{" "}
              <span className="text-3xl sm:text-lg md:text-xl lg:text-3xl">
                2024
              </span>
            </p>
            <p className="text-lg md:text-xl  text-gray-200 z-10 max-w-3xl px-4 md:px-0">
              A dynamic segment of Anokha 2024, where influential voices share
              insights on society, technology, and leadership.
            </p>
            {!loading ? (
              <p className="text-3xl md:text-xl font-bold bg-[rgba(0,0,0,0.3)] backdrop-blur-lg  text-gray-200 z-10 max-w-3xl px-4 py-2 rounded-lg mt-4 border-2 border-gray-300">
                ₹{Math.ceil(eventData.eventPrice * 1.18)}
                <span className="text-sm">{"  (Incl. of GST)"}</span>
              </p>
            ) : null}
            <button
              className={`mt-8 px-4 py-2 text-lg font-semibold border rounded-full z-10 transition 
    ${
      loading || !isOpen
        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
        : "bg-white text-black hover:scale-105"
    }`}
              onClick={handleRegister}
              disabled={loading || !isOpen || isRegistered}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Checking Your Registration Status ...
                </div>
              ) : isOpen ? (
                secureLocalStorage.getItem("isLoggedIn") == "0" ||
                secureLocalStorage.getItem("isLoggedIn") == undefined ||
                secureLocalStorage.getItem("isLoggedIn") == null ? (
                  "Login to Register"
                ) : isRegistered ? (
                  "Registered"
                ) : (
                  "Register"
                )
              ) : (
                "Registrations Closed"
              )}
            </button>

            <div className=" inset-0 flex justify-center items-center">
              <div
                onClick={handleScrollMore}
                className="bg-gray-400 tex animate-bounce absolute md:top-[92%] sm:top-[90%]  w-36 rounded-full px-3 py-2 flex items-center justify-center cursor-pointer"
              >
                Know More <FaAngleDoubleDown className="ml-2" />
              </div>
            </div>
          </div>

          <div className="mt-16 px-4 min-h-fit sm:min-h-screen md:min-h-screen lg:min-h-fit">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
              The Speakers
            </h2>
            <div className="flex justify-center">
              <p className="text-center text-gray-300 mb-12 lg:w-1/2">
                Lumière features inspiring talks from renowned figures, offering
                interactive Q&A sessions for attendees to engage directly and
                gain fresh insights.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {speakers.map((speaker, index) =>
                index < 3 ? (
                  <div
                    key={index}
                    className="py-4 px-12 rounded-lg w-full sm:w-auto"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full  flex items-center justify-center text-gray-400 text-4xl font-bold">
                      <Image
                        src={`/images/speaker${index + 1}.jpg`}
                        width={128}
                        height={128}
                        alt={speaker.name[0]}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white text-center mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-300 text-center text-sm max-w-xs mx-auto">
                      {speaker.role}
                    </p>
                  </div>
                ) : null
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {speakers.map((speaker, index) =>
                index > 2 ? (
                  <div
                    key={index}
                    className="py-4 px-12 rounded-lg w-full sm:w-auto"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full  flex items-center justify-center text-gray-400 text-4xl font-bold">
                      <Image
                        src={`/images/speaker${index + 1}.jpg`}
                        width={128}
                        height={128}
                        alt={speaker.name[0]}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-white text-center mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-300 text-center text-sm max-w-xs mx-auto">
                      {speaker.role}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Lumere;
