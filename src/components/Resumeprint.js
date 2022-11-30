import React from "react";
import { Link } from "react-router-dom";
import "./Resumeprint.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Resumeprint = (props) => {
  //   console.log("Hello");
  const download = () => {
    console.log("vjbj");
    const input = document.getElementById("res");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10, 200, 200);
      pdf.save("download.pdf");
    });
  };
  return (
    <div>
      <div id="res">
        <div className="resume">
          <div className="nametitle">
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <h4>
              <i class="fa-sharp fa-solid fa-envelope"></i> {props.gmail}
            </h4>
            <h4>
              <i class="fa-solid fa-phone"></i> {props.phone}
            </h4>
          </div>
          <hr></hr>
          <div className="contact"></div>
          <div className="work">
            {/* <h2>Work Experience</h2> */}
            {props.workexp === "" ? null : <h2>Work Experience</h2>}
            <h4>{props.workexp}</h4>
          </div>
          <hr></hr>
          <div className="acad">
            {/* <h2>Academics</h2> */}
            {props.tenth === "" &&
            props.twelth === "" &&
            props.grad === "" ? null : (
              <h2>Academics</h2>
            )}
            <h4>{props.tenth}</h4>
            <h4>{props.twelth}</h4>
            <h4>{props.grad}</h4>
          </div>
          <hr></hr>
          <div className="skill">
            {/* <h2>Skills</h2> */}
            {props.skills === "" ? null : <h2>Skills</h2>}
            <h4>{props.skills}</h4>
          </div>
          <hr></hr>
          <div className="proj">
            {/* <h2>Projects</h2> */}
            {props.projects === "" ? null : <h2>Projects</h2>}
            <h4>{props.projects}</h4>
          </div>
          <hr></hr>
          {/* <div className="">
        <h4>{props.objective}</h4>
      </div> */}

          <div className="ach">
            {/* <h2>Achievements</h2> */}
            {props.achievements === "" ? null : <h2>Achievements</h2>}
            <h4>{props.achievements}</h4>
          </div>
        </div>
      </div>
      <div>
        <i class="fa-solid fa-download dwnldicon"></i>
        <button onClick={download} className="btnd">
          Download
        </button>
      </div>
      {/* <div>
        <Link to="/resume">Back</Link>
      </div> */}
    </div>
  );
};
export default Resumeprint;
