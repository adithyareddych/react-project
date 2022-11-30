import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginImg from "./LoginImg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    rno: "",
    password: "",
  });

  // const [data, setData] = useState([]);
  // console.log(inpval);

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

    const { rno, password } = inpval;
    const req = localStorage.getItem(rno);
    if (rno === "") {
      toast.error("Please enter Roll Number", {
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
      if (req && req.length) {
        const userdata = JSON.parse(req);
        const userlogin = userdata.filter((el) => {
          return el.rno === rno && el.password === password;
        });

        if (userlogin.length === 0) {
          toast.error("Invalid details", {
            position: "top-center",
          });
        } else {
          localStorage.setItem("user", JSON.stringify(userlogin));
          history("/details");
        }
      } else {
        toast.warning("Student not found,Please Sign up", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-between signincontainer">
          <div
            className="left_data"
            style={{ width: "100%", paddingLeft: "6%" }}
          >
            {/* <i class="fa-solid fa-user-graduate fa-xl signinicon"></i> */}
            <h3 className="text-center col-lg-7">Sign In</h3>
            <h6 style={{ color: "red" }}>* Required</h6>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-circle-user"></i>&nbsp;
                <Form.Label>Roll Number</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="rno"
                  name="rno"
                  onChange={getdata}
                  placeholder="Enter Roll Number  "
                />
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                ></Form.Group>
                <i class="fa-solid fa-key"></i>&nbsp;
                <Form.Label>Password</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

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
              New to college?{" "}
              <span>
                <NavLink to="/signup" className="sigup">
                  SignUp
                </NavLink>
              </span>{" "}
              <br></br>
              {/* <span>
                <NavLink to="#" className="sigup">
                  Forgot password?
                </NavLink>
              </span> */}
            </p>
          </div>
          <LoginImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
