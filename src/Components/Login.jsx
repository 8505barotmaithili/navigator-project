import React, { useContext, useState } from "react";

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlesubmt = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        handleLogin(res.data.token);
        console.log(res.data.token);
        navigate("/Products");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={(e) => handlesubmt(e)}>
        <h2>login form</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        ></input>
        <br></br>
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="pass"
        ></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Login;
