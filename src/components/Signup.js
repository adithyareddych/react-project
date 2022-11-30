import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Img from "./Img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phoneno: "",
    branch: "",
    admno: "",
    rno: "",
    password: "",
  });

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

    const { name, email, phoneno, branch, admno, rno, password } = inpval;

    if (name === "") {
      toast.error("Please enter name", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Please enter Email", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter valid email address", {
        position: "top-center",
      });
    } else if (phoneno === "") {
      toast.error("Please enter Phone number", {
        position: "top-center",
      });
    } else if (branch === "") {
      toast.error("Please enter Branch", {
        position: "top-center",
      });
    } else if (admno === "") {
      toast.error("Please enter Admission number!", {
        position: "top-center",
      });
    } else if (rno === "") {
      toast.error("Please enter Roll number!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Please enter password", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      history("/login");
      toast.success("Successfully Registered", {
        position: "top-center",
      });
      localStorage.setItem(rno, JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3 signupcontainer">
        <section className="d-flex justify-content-between ">
          <div className="left_data mt-3 p-3 " style={{ width: "100%" }}>
            {/* <i class="fa-solid fa-user-graduate fa-xl signupicon"></i> */}
            <h2 className="text-center col-lg-7">Sign Up</h2>
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
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-envelope"></i>&nbsp;
                <Form.Label>Email</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="email"
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
                  name="phoneno"
                  onChange={getdata}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-sharp fa-solid fa-building-columns"></i>&nbsp;
                <Form.Label>Branch</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="text"
                  name="branch"
                  onChange={getdata}
                  placeholder="Enter Branch"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa fa-id-card"></i>&nbsp;
                <Form.Label>Admission Number</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="email"
                  name="admno"
                  onChange={getdata}
                  placeholder="Enter Admission Number"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-circle-user"></i>&nbsp;
                <Form.Label>Roll Number</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="rno"
                  name="rno"
                  onChange={getdata}
                  placeholder="Enter Roll Number"
                />
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                ></Form.Group>
                <i class="fa-solid fa-key"></i>&nbsp;
                <Form.Label>Password</Form.Label>
                <sup>*</sup>
                <Form.Control
                  className="mb-3 col-lg-8"
                  controlId="formBasicEmail"
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
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
            <p className="mt-3" id="alacc">
              Already Have an Account?{" "}
              <span>
                <NavLink to="/login" id="sig">
                  SignIn
                </NavLink>
              </span>{" "}
            </p>
          </div>
          <Img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
