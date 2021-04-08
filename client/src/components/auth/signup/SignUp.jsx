import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/t.svg";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const signupData = (e) => {
    e.preventDefault();
    console.log(username, email, password, confrimPassword);
  };

  return (
    <div>
      <div class="container mt-5 ">
        <div class="row main align-items-center mt-5">
          <div class="col-md-6 col-12 mt-5">
            <div class="img-wrap">
              <img
                src={loginImage}
                alt=""
                class="illustration-image h-100 w-100"
              />
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <h1 class="text-center heading font-weight-bolder">
              Way<span>2</span>Connect
            </h1>
            <form action="" class="mt-5">
              <div class="form-group">
                <label class="font-weight-bolder font-weight-bolder">
                  Username:{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter the username"
                  name="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-weight-bolder font-weight-bolder">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter the mail id"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-weight-bolder font-weight-bolder">
                  Password :{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="email"
                  placeholder="Enter the password"
                  name="email"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="font-weight-bolder font-weight-bolder">
                  Confirm password :{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="pwd"
                  placeholder="Confirm the password"
                  name="pswd"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={signupData}
              >
                Submit
              </button>
              <p class="m-2 font-weight-bolder">
                Already having the account ? <Link to="/login">click here</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
