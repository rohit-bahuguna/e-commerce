import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginAction";
import { addToCart } from "../redux/actions/cartActions";
import axios from "axios";

const Login = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const loginData = useSelector((state) => state.login);
  const cartData = useSelector((state) => state.cart.products);
  console.log(cartData.length)
  console.log("----login data from selector -----", loginData.loginStatus);


  if (loginData.loginStatus) {
    navigate("/");
  }


  const getallcart = async () => {
 
    console.log(loginData.loginUsername.token);
    const url = "https://ecommerceapibyrohitbahuguna.herokuapp.com/cart/getallcart";
    const response = await axios
      .get(url, {
        headers: {
          authorization: loginData.loginUsername.token,
        },
      })
      .catch((error) => console.log(error));

   // console.log("got all cart  -->>> ", response.data);

    // response.data[0].product.id = response.data[0]._id;
    // console.log("--lets see" , response.data[0]);

    if(cartData.length !== response.data.length && cartData.length < response.data.length && response.data.length !== 0){
      response.data.map((value) => {
        value.product.id = value._id
      { console.log(value.product)}
        dispatch(addToCart(value.product))
        // console.log(value.product)
      });
    }
   
  };



  useEffect(() => {
    if (loginData.loginStatus) {
      getallcart();
    }

  })

  const loginFn = async (e) => {
    // take two input values
    e.preventDefault()
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
    const url = "https://ecommerceapibyrohitbahuguna.herokuapp.com/user/singin/";
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
                    
                    <input className="rounded-pill" type="submit" value="Log in" onClick={(e) => { loginFn(e) }} />
                    <br/>
                    <Link to="/signup">
                      <input className="rounded-pill" type="submit" value="New Here Create Account"  />
                  </Link>
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

export default Login;

/*  <div className="col-2">
          
          
        </div> */
