import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminLoginImg from "./AdminLoginImg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import "./Admin.css";
const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    gmail: "",
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

    const { gmail, password } = inpval;
    if (gmail === "") {
      toast.error("Please enter Email", {
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
      if (gmail === "admin.hu@hu.com" && password === "admin@hu") {
        history("/verify");
      } else {
        toast.error("Please enter valid details", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div className="container mt-6">
        <section className="d-flex justify-content-between admincontainer">
          <div
            className="left_data"
            style={{ width: "100%", paddingLeft: "6%", marginTop: "8%" }}
          >
            <h3 className="text-center col-lg-7">Admin Login</h3>
            <h6 style={{ color: "red" }}>* Required</h6>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <i class="fa-solid fa-envelope"></i>&nbsp;
                <Form.Label>Email</Form.Label>
                <sup>*</sup>
                <Form.Control
                  type="gmail"
                  name="gmail"
                  onChange={getdata}
                  placeholder="Enter Email  "
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
            <p className="mt-3">
              {/* New to college{" "}
              <span>
                <NavLink to="/signup">SignUp</NavLink>
              </span>{" "} */}
              <span>
                <NavLink to="#" className="alacc1">
                  Forgot password?
                </NavLink>
              </span>
            </p>
          </div>
          <AdminLoginImg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
