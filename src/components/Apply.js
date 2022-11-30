import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Img from "./Img";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Apply.css";
import Statusadm from "./Statusadm";
const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    id: null,
    name: "",
    gmail: "",
    phone: "",
    tenth: "",
    twelth: "",
    rank: "",
    xii: "",
    father: "",
    pend: true,
    verify: false,
  });
  const [pending, setpending] = useState();
  const [verifyy, setverify] = useState();
  let gmailstud = null;
  const fungmail = (e) => {
    gmailstud = e.target.value;
  };
  const funstatus = (e) => {
    e.preventDefault();
    if (gmailstud === null) {
      toast.error("Enter Gmail", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const studdetails = JSON.parse(localStorage.getItem("adm"));
      let tempstud = studdetails.find((e) => e.gmail === gmailstud);
      if (tempstud) {
        // verified = tempstud.verify;
        // console.log(tempstud.verify);
        setpending(tempstud.pend);
        setverify(tempstud.verify);
        // console.log(verified);
      } else {
        toast.error("Please Enter Registered Email", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  const [data] = useState([]);
  console.log(inpval);

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

  const addData = (e) => {
    e.preventDefault();

    const { id, name, gmail, phone, tenth, twelth, rank } = inpval;

    if (name === "") {
      toast.error("Please enter name", {
        position: "top-center",
      });
    } else if (gmail === "") {
      toast.error("Please enter Email", {
        position: "top-center",
      });
    } else if (!gmail.includes("@")) {
      toast.error("Please enter valid email address", {
        position: "top-center",
      });
    } else if (phone === "") {
      toast.error("Please enter Phone number", {
        position: "top-center",
      });
    } else if (tenth === "") {
      toast.error("Please enter Branch", {
        position: "top-center",
      });
    } else if (twelth === "") {
      toast.error("Please enter Admission number!", {
        position: "top-center",
      });
    } else if (rank === "") {
      toast.error("Please enter password", {
        position: "top-center",
      });
    } else {
      //   history("/login");
      //   localStorage.setItem(gmail, JSON.stringify([...data, inpval]));
      let admissions = JSON.parse(localStorage.getItem("adm"));
      //   console.log(admissions);
      if (admissions) {
        inpval.id = admissions.length + 1;
        for (let index = 0; index < admissions.length; index++) {
          if (admissions[index].gmail === gmail) {
            toast.error("Already Registered !", {
              position: toast.POSITION.TOP_CENTER,
            });
            return false;
          }
        }
      } else {
        inpval.id = 1;
        admissions = [];
      }
      admissions.push(inpval);
      //   setInpval(() => {
      //     return { inpval: {} };
      //   });
      console.log(admissions);
      localStorage.setItem("adm", JSON.stringify(admissions));
      toast.success("Successfully Registered", {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.reload();
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between applycontainer">
          <div
            className=" left_data mt-3"
            style={{ width: "70%", paddingLeft: "20px" }}
          >
            <h3 className="text-center col-lg-7">Student Registration Form </h3>
            <h6 style={{ color: "red" }}>* Required</h6>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-address-card"></i>&nbsp;
                <Form.Label>Name</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Name"
                  //   value={inpval.name}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-address-card"></i>&nbsp;
                <Form.Label>Father's Name</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="father"
                  onChange={getdata}
                  placeholder="Enter Father's Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-address-card"></i>&nbsp;
                <Form.Label>Mother's Name</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="Mother"
                  onChange={getdata}
                  placeholder="Enter Mother's Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-envelope"></i>&nbsp;
                <Form.Label>Email</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="gmail"
                  onChange={getdata}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-phone"></i>&nbsp;
                <Form.Label>Phone</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={getdata}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-school"></i>&nbsp;
                <Form.Label>X School Name</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="school"
                  onChange={getdata}
                  placeholder="Enter School Name"
                />
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                ></Form.Group>
                <i class="fa-solid fa-calculator"></i>&nbsp;
                <Form.Label>X CGPA</Form.Label>
                <sup>*</sup>
                <Form.Control
                  className="mb-3 col-lg-8"
                  controlId="formBasicEmail"
                  type="text"
                  name="tenth"
                  onChange={getdata}
                  placeholder="X CGPA"
                />
                <i class="fa-solid fa-school"></i>&nbsp;
                <Form.Label>XII School Name</Form.Label>
                <sup>*</sup>
                <Form.Control
                  className="mb-3 col-lg-8"
                  controlId="formBasicEmail"
                  type="text"
                  name="xii"
                  onChange={getdata}
                  placeholder="Enter XIIth School Name"
                />
                <i class="fa-solid fa-calculator"></i>&nbsp;
                <Form.Label>XII CGPA</Form.Label>
                <sup>*</sup>
                <Form.Control
                  className="mb-3 col-lg-8"
                  controlId="formBasicEmail"
                  type="text"
                  name="twelth"
                  onChange={getdata}
                  placeholder="Enter XIIth CGPA"
                />
                <i class="fa-solid fa-ranking-star"></i>&nbsp;
                <Form.Label>EAMCET Rank</Form.Label>
                <sup>*</sup>
                <Form.Control
                  className="mb-3 col-lg-8"
                  controlId="formBasicEmail"
                  type="text"
                  name="rank"
                  onChange={getdata}
                  placeholder="Enter EAMCET Rank"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              ></Form.Group>
              <Button
                variant="primary"
                className="col-lg-8"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            {/* <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p> */}
          </div>
          <div
            className="right_data stat"
            style={{ width: "40%", backgroundColor: "lightgreen" }}
          >
            <h3>Already Registered?</h3>
            {/* <Link to="status">Check Status</Link> */}
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <div id="envelop">
                  <i class="fa-solid fa-envelope"></i>&nbsp;
                  <Form.Label>Email</Form.Label>
                  <sup>*</sup>
                </div>
                <Form.Control
                  type="text"
                  name="gmailstud"
                  onChange={fungmail}
                  placeholder="Enter Email"
                  //   value={inpval.name}
                  style={{
                    marginLeft: "80px",
                  }}
                />
              </Form.Group>
            </Form>
            <Button
              variant="primary"
              className="col-lg-8"
              onClick={funstatus}
              style={{ background: "rgb(67, 185, 127)", marginLeft: "80px" }}
              type="submit"
            >
              Submit
            </Button>
            <Form.Group
              className="mb-3 col-lg-3"
              controlId="formBasicPassword"
            ></Form.Group>
            <Statusadm ver={verifyy} pen={pending} />
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
