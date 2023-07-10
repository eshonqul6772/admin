import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import axios from "axios";
// import swal from 'sweetalert'

import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate("");

 
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });


  
  
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1212/admin/login",
        values
      );


      
      const setToken = JSON.stringify(localStorage.setItem("setToken",response))

      console.log(setToken)


      console.log(response);
      navigate("/costumer");

     

      

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Kirish</h2>

          <div>
            <div style={{ marginBottom: "13px" }} className="login_box">
              <input
                type="text"
                name="userName"
                placeholder="login"
                value={values.userName}
                onChange={handleInputChange}
              />
              <AiOutlineUser className="users_icons" />
            </div>

            <div className="login_box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleInputChange}
              />
              <CiLock className="users_icons" />
            </div>
          </div>

          <button type="submit">Kirish</button>
        </form>
      </div>
    </>
  );
};

export default Login;