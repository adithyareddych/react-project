import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Details1.css";
export const Details = () => {
  const items = JSON.parse(localStorage.getItem("user"));
  //   console.log(items[0].name);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <div className="header11">
        <div className="side-nav11">
          <ul className="nav-links11">
            <li className="list11">
              <a href="#">
                <p>Dashboard</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Activity</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Performance</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Complaints</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Attendance</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Discipline</p>
              </a>
            </li>
            <li className="list11">
              <a href="#">
                <p>Time table</p>
              </a>
            </li>
            <li className="list11">
              <button onClick={logout} id="btnlog11">
                Logout
              </button>
            </li>
            <div className="active11"></div>
          </ul>
        </div>
      </div>
      <div className="content1">
        <div className="box content" id="detoutput">
          <h3 style={{ color: "blue", textAlign: "center" }}>Details</h3>
          <hr />
          {/* <img src="./images/3.jpg"></img> */}
          <span>Student Name</span>
          <span id="sep">:</span>
          <b>{items[0].name}</b>
          <br />
          <span>Gmail</span>
          <span id="sep1">:</span>
          <b>{items[0].email}</b>
          <br />
          <span>Phone Number</span>
          <span id="sep2">:</span>
          <b>{items[0].phoneno}</b>
          <br />
          <span>Branch</span>
          <span id="sep3">:</span>
          <b>{items[0].branch}</b>
          <br />
          <span>Admission Number</span>
          <span id="sep4">:</span>
          <b>{items[0].admno}</b>
          <br />
          <span>Roll Number</span>
          <span id="sep5">:</span>
          <b>{items[0].rno}</b>
          <br />
        </div>
        <div className="box1">
          <div className="overallatt">
            <h3 style={{ color: "blue" }}>Overall Attendance</h3>
            <hr />
            <h3>73%</h3>
            <div className="att">
              <div className="attbar"></div>
            </div>
          </div>
        </div>
        <div class="box2">
          <h3 style={{ color: "blue" }}>Result</h3>
          <hr />
          <h4>Current SGPA</h4>
          <h4>8.98</h4>
          <hr />
          <h4>Overall CGPA</h4>
          <h4>8.62</h4>
          <hr />
          <h4>Number of backlogs</h4>
          <h4>0</h4>
        </div>
        <div className="box4">
          <h3 style={{ color: "blue" }}>Upcoming Tests</h3>
          <hr />
          <ul>
            <li className="list11">
              Discrete Mathematics <span>Dec 4</span>
            </li>
            <li className="list11">
              Software Engineering <span>Dec 8</span>
            </li>
            <li className="list11">
              Web Technologies <span id="wt">Dec 12</span>
            </li>
            <li className="list11">
              Operating Systems <span id="os">Dec 28</span>
            </li>
            <li className="list11">
              Computer Networks <span id="cn">Dec 30</span>
            </li>
          </ul>
        </div>
        <div className="box3">
          <h3 style={{ color: "blue" }}>Notice Board</h3>
          <hr />
          <ul>
            <li className="list11">
              Your attendance is below 75%.Make sure you attend college
              regularly.
              {/* <img src="./new.png" width="50px" /> */}
            </li>
            <li className="list11">
              Request you to pay the fee for the AY 2022-23 at the earliest.
              {/* <img src="./new.png" width="50px" /> */}
            </li>
            <li className="list11">
              Check your Mid semester marks at your respective departments.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Details;
