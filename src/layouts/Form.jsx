import React, { useState } from "react";
import { Link } from "react-router-dom";
import Education from "./Education";
import Experiences from "./Experiences";
import PersonalDetails from "./PersonalDetails";
import Project from "./Project";
import Extras from "./Extras";
import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./Success";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-gray-800">{FormTitle[page]}</h1>
      </div>
      <div className="progressbar bg-gray-200 h-2 rounded-full mt-4 mb-6">
        <div
          className="bg-indigo-500 h-2 rounded-full"
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div>{PageDisplay()}</div>
      <div className="flex justify-center gap-3 py-5">
        {page > 0 && (
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-gray-500 hover:-translate-y-1"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
        )}
        <button
          className="bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-indigo-400 hover:-translate-y-1"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              axios
                .post("http://localhost:4000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:4000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
        {page === FormTitle.length - 1 && (
          <Link to="/score">
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-indigo-400 hover:-translate-y-1">
              Check ATS Score from AI
            </button>
          </Link>
        )}
      </div>
      {success && <Success />}
    </div>
  );
};

export default Form;
