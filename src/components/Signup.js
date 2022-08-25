import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersignup } from "../redux/actions/loginAction";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const signUpFn = async (e) => {
    // take two input values
    e.preventDefault()
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
    const url = "https://ecommerceapibyrohitbahuguna.herokuapp.com/user/singup/";
    const response = await axios.post(url, obj).catch((err) => {
      console.log("->>>>>>>>", err);
      toast.error(err.response.data.massage)
    });
    
    // if successfull, call dispatch
    if (response !== undefined) {
      dispatch(usersignup(response.data));
      console.log(response.data);
      toast.success("Account Created Successfully")
    } else {
      // console.log(username, password);
    }
    // else
    // show error
  };
  return (
    <>
   <ToastContainer />
     

      <section className="why_section layout_padding">
         <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form >
                        <fieldset>
                          Name: <input type="text" ref={inputRef1} name="username" required/>
                           email: <input type="email" ref={inputRef3} name="password"  required/>
                         
                           Password: <input type="password" ref={inputRef2} name="password" required/>
                    
                    <input className="rounded-pill" type="submit" value="Sign Up" onClick={signUpFn} />
        
                        </fieldset>
                  
                      </form>
                               
              </div>
              
                         
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Signup;
