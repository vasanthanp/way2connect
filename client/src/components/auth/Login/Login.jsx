import React, { useState } from "react";
import loginImage from "../../../assets/images/t.svg";
import { Link } from "react-router-dom";
import "../Auth.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = (e) => {
    e.preventDefault();
    console.log("email id : ", email, " password :", password);
  };

  return (
    <div className="container mt-5 ">
      <div className="row main align-items-center mt-5">
        <div className="col-md-6 col-12 mt-5">
          <div className="img-wrap">
            <img
              src={loginImage}
              alt=""
              className="illustration-image h-100 w-100"
            />
          </div>
        </div>
        <div className="col-md-6 mt-5 form-className">
          <h1 className="text-center heading ">
            Way<span>2</span>Connect
          </h1>
          <form action="/action_page.php">
            <div className="form-group mt-5">
              <label for="email" className="font-weight-bolder">
                Email :{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label for="pwd" className="font-weight-bolder">
                Password :{" "}
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={loginData}
            >
              Submit
            </button>
            <p className="m-2 font-weight-bolder">
              Don't having the account ? <Link to="/signup">click here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
