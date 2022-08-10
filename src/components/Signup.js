import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersignup } from "../redux/actions/loginAction";
import axios from "axios";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const signUpData = useSelector((state) => state.signup);


  console.log("----login data from selector -----", signUpData);
  console.log(signUpData.signupStatus)
  if (signUpData.signupStatus) {
       console.log(signUpData.signupStatus)
    setTimeout(() => {

        navigate("/login");
    }, 1000);
    
  }

  const loginFn = async () => {
    // take two input values
    let username = inputRef1.current.value;
    let password = inputRef2.current.value;
    let email = inputRef3.current.value;
    console.log(typeof username, typeof email, typeof password);
    let obj = {
      username: username,
      email: email,
      password: password
    };
    console.log("useername and password", username, password, email);

    // call api with username and password
    const url = "http://localhost:4000/user/singup/";
    const response = await axios.post(url, obj).catch((err) => {
      console.log(err);
    });

    // if successfull, call dispatch
    if (response !== undefined) {
      dispatch(usersignup(response.data));
      console.log(response.data);
    } else {
      // console.log(username, password);
    }
    // else
    // show error
  };
  return (
    <>

      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          <h2>SignUp Page</h2>
        </div>
      </div>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          Username: <input type="text" ref={inputRef1} name="username" /> <br />
          email: <input type="email" ref={inputRef3} name="password" />
          <br />
          Password: <input type="password" ref={inputRef2} name="password" />
          <button onClick={loginFn}>Signup</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
