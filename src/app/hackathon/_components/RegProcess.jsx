import React from "react";

const steps = [
  {
    title: "Registration Process",
    regsteps: [
      "Participants must strictly engage in the use of Intel® AI Analytics Toolkits, its libraries & SYCL/DPC++ libraries while framing their ideations. If not, your project will not be considered for further evaluation. ",
      "The ideations of the participants must be compiled in the form of a PowerPoint Presentation (PPT) converted into a PDF format for submission. ",
      "A sample template for idea submission will be given to the participants in their hackathon dashboard, all the points mentioned in the template should strictly be covered in their submission. ",
      "Link of the GitHub repository will be given to the participants in their hackathon dashboard. ",
      "Participants will be required to fork this repository and update the README file, filling in the required details. ",
      "To avoid disqualification, participants must submit their ideas in the hackathon dashboard before the deadline. ",
      "The prototype submission should be made on a GitHub public repository.",
      "The entire code base needs to be present on the team's GitHub repository.",
      "The prototype submission must emphasize on both deployment and inference, with and without Intel® one API.",
      "Pull requests of the forked repository need to be generated. ",
      "To know more details about the registration and the rules of the hackathon, please click on this link ",
    ],
  },
];

const RegProcess = () => {
  return (
    <div>
      <div className="w-full h-full mt-7">
        <div className="bg-blue-900 md:w-fit sm:w-[95%] mx-auto odd:rounded-bl-[50px] even:rounded-br-[50px]">
          <div className=" mb-10 rounded-tr-none rounded-bl-none ">
            <h2 className="font-bold text-2xl py-5 px-12 bg-gradient-to-r from-[#0A113A]  to-blue-900  w-full text-white odd:rounded-bl-[50px] even:rounded-tl-[50px]">
              Registration Process
            </h2>
            <ol className="md:px-[80px] list-decimal sm:px-6 md:pb-10  pt-0 sm:py-8 text-md  text-white space-y-3 ml-2">
              <li className="ml-5">
                Visit the Anokha website and choose the specific hackathon you
                wish to participate in.
              </li>
              <li>
                Enter IDC Credentials:
                <ul className="list-disc ml-7">
                  <li>Click the provided link to view the demo video about Intel
                    Developer Cloud (IDC).</li>
                  <li>Access the IDC website through the provided link.</li>
                  <li>Create an IDC account or sign in if you already have one.</li>
                  <li>Copy your IDC credentials (username and password).</li>
                </ul>
              </li>
              <li>
                Fill in the Anokha registration form:
                <ul className="list-disc ml-7">
                  <li>Return to the Anokha hackathon registration page.</li>
                  <li>Paste your copied IDC credentials into the designated fields.</li>
                  <li>Complete the remaining registration information.</li>
                </ul>
              </li>
              <li>
              Submit Registration:
                <ul className="list-disc ml-7">
                  <li>Review your details.</li>
                  <li>Submit the registration form.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegProcess;
