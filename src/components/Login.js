import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginAction";
import { addToCart } from "../redux/actions/cartActions";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const loginData = useSelector((state) => state.login);

  console.log("----login data from selector -----", loginData.loginStatus);

  if (loginData.loginStatus) {
    navigate("/productlist");
  }

  

  // if(loginData.loginStatus) {
  //   // api call to get all cart product of login user
  //
  // }

  const loginFn = async () => {
    // take two input values
    let username = inputRef1.current.value;
    let password = inputRef2.current.value;
    let email = inputRef3.current.value;
    console.log(typeof username, typeof email, typeof password);
    let obj = {
      username: username,
      email: email,
      password: password,
    };
    console.log("useername and password", username, password, email);

    // call api with username and password
    const url = "http://localhost:4000/user/singin/";
    const response = await axios.post(url, obj).catch((err) => {
      console.log(err);
    });

    // if successfull, call dispatch
    if (response !== undefined) {
      console.log("ahhhhh");
      dispatch(loginUser(response.data));
      console.log(response.data);
      // get cart
      //getallcart();
      
    } else {
      // console.log(username, password);
    }
    // else
    // show error

    //setTimeout(getallcart(), 10000);
  };
  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          <h2>Login Page</h2>
        </div>
      </div>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          Username: <input type="text" ref={inputRef1} name="username" /> <br />
          email: <input type="email" ref={inputRef3} name="password" />
          <br />
          Password: <input type="password" ref={inputRef2} name="password" />
          <button onClick={loginFn}>Login</button>
        </div>
      </div>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          <h5>New User?</h5>
          <Link to="/signup">
            <button className="btn btn-primary btn-sm ">Create Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

/*  <div className="col-2">
          
          
        </div> */
