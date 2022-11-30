import React, { useState } from "react";
import Resumeprint from "./Resumeprint";
import "./Resume.css";
const Resume = () => {
  const [flag, setflag] = useState(false);
  const [inpval, setInpval] = useState({
    name: "",
    title: "",
    workexp: "",
    tenth: "",
    twelth: "",
    grad: "",
    academics: "",
    objective: "",
    skills: "",
    projects: "",
    achievements: "",
    phone: "",
    gmail: "",
  });
  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  //   console.log(inpval.name);
  const funpreview = () => {
    //  console.log(inpval.name);
    setflag(true);
    // console.log(flag);
    //   <Resumeprint
    //     name={inpval.name}
    //     title={inpval.title}
    //     workexp={inpval.workexp}
    //     academics={inpval.academics}
    //     objective={inpval.objective}
    //     skills={inpval.skills}
    //     projects={inpval.projects}
    //     achievements={inpval.achievements}
    //     contact={inpval.contact}
    //   />;

    //     // console.log("HEllo");
  };
  return (
    <div>
      {/* <form className="input-fields">
        <h1>Resume Generator</h1>
        <input type="text" name="name" placeholder="name" onChange={getdata} />
        <input
          type="text"
          name="title"
          placeholder="Title eg web developer"
          onChange={getdata}
        />
        <textarea
          name="workexp"
          placeholder="work experience"
          onChange={getdata}
        ></textarea>
        <textarea
          name="academics"
          placeholder="academic details"
          onChange={getdata}
        ></textarea>
        <input name="objective" placeholder="objective" onChange={getdata} />
        <textarea
          name="skills"
          placeholder="skills"
          onChange={getdata}
        ></textarea>
        <textarea
          name="projects"
          placeholder="projects"
          onChange={getdata}
        ></textarea>
        <textarea
          name="achievements"
          placeholder="achievements"
          onChange={getdata}
        ></textarea>
        <textarea
          name="contact"
          placeholder="contact"
          onChange={getdata}
        ></textarea>
      </form> */}
      {flag ? (
        <Resumeprint
          name={inpval.name}
          title={inpval.title}
          workexp={inpval.workexp}
          tenth={inpval.tenth}
          twelth={inpval.twelth}
          grad={inpval.grad}
          objective={inpval.objective}
          skills={inpval.skills}
          projects={inpval.projects}
          achievements={inpval.achievements}
          gmail={inpval.gmail}
          phone={inpval.phone}
        />
      ) : (
        // <form>
        //   <input type="text" name="name" onChange={getdata}></input>
        //   <button onClick={funpreview}>Preview or edit</button>

        // </form>

        <form className="input-fields">
          <h1>Resume Generator</h1>
          <h5>Primary Details</h5>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={getdata}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title (Eg. Web Developer,Data Analyst)"
            onChange={getdata}
          />
          <br></br>
          <h5>Work Experience</h5>
          <textarea
            className="ta"
            name="workexp"
            placeholder="Work Experience"
            onChange={getdata}
          ></textarea>
          <br></br>
          <h5>Academic Details</h5>
          <textarea
            className="ta"
            name="tenth"
            placeholder="Secondary School"
            onChange={getdata}
          ></textarea>
          <textarea
            className="ta"
            name="twelth"
            placeholder="Intermediate"
            onChange={getdata}
          ></textarea>
          <textarea
            className="ta"
            name="grad"
            placeholder="Graduation"
            onChange={getdata}
          ></textarea>
          <h5>Skills and Objectives</h5>
          <input name="objective" placeholder="Objectives" onChange={getdata} />
          <textarea
            className="ta"
            name="skills"
            placeholder="Skills"
            onChange={getdata}
          ></textarea>
          <br></br>
          <h5>Projects</h5>
          <textarea
            className="ta"
            name="projects"
            placeholder="Projects"
            onChange={getdata}
          ></textarea>
          <br></br>
          <h5>Achievements</h5>
          <textarea
            className="ta"
            name="achievements"
            placeholder="Achievements"
            onChange={getdata}
          ></textarea>
          <h5>Contact Details</h5>
          <textarea
            className="ta"
            name="gmail"
            placeholder="Enter Gmail"
            onChange={getdata}
          ></textarea>
          <textarea
            className="ta"
            name="phone"
            placeholder="Phone Number"
            onChange={getdata}
          ></textarea>
          <button className="btn2" onClick={funpreview}>
            Preview
          </button>
        </form>
      )}
    </div>
  );
};
export default Resume;
