import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../redux/actions/loginAction";
import { addToCart } from "../redux/actions/cartActions";

import { BsCart } from "react-icons/bs";
import Login from "./Login";
const Header = () => {
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);

  //   console.log(
  //     "----login data from selector -----",
  //     loginData.loginUsername.user.username
  //   );

  const dispatch = useDispatch();

  const handleAuth = () => {
    console.log("check  "  , loginData.loginStatus)
    if (loginData.loginStatus) {

      dispatch(logoutUser());
       navigate("/");
    } else {
      //dispatch(loginUser('newtonschool'));
      navigate("/login");
    }
  };

  return (
    <>
      {/* <div className="row bg-info bg-opacity-50">
        <div className="col-6">
          <h2>Header</h2>
        </div>
        <div className="col-6">
          <h3>
            {loginData.loginStatus
              ? `Welcome ${loginData.loginUsername.user.username}`
              : ""}
          </h3>
        </div>
      </div> */}
     
        <header className="header_section ">
         <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
               <Link className="navbar-brand" to="/"><img width="250" src="../images/logo.png" alt="#" /></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">Home </Link>
                     </li>
                   
                     <li className="nav-item">
                        <Link className="nav-link" to="/productlist">Products</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/orders">Orders</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/cart"> <BsCart/> Cart</Link>
                     </li>
                       <li className="nav-item">
                          {loginData.loginStatus ? <p className="nav-link" onClick={handleAuth}>
                             Log Out
                            
                        </p> : <Link className="nav-link" to="/login">
                             Log in
                            
                        </Link>}
                        
                       </li>
                       {loginData.loginStatus
                          ? <li className="nav-item ">
                             <p className="nav-link text-danger" to="/login">
                              Welcome <span >{loginData.loginUsername.user.username}</span>
                        </p>
                              </li>
              : ""}
                     <form className="form-inline">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                     </form>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
    
    </>
  );
};

export default Header;


 {/* {loginData.loginStatus ? <Link to="/">
            <button className="btn btn-primary btn-sm" onClick={handleAuth}>
            Logout
            </button>
          </Link> : <Link to="/login">
            <button className="btn btn-primary btn-sm" onClick={handleAuth}>
            Login
            </button>
          </Link>} */}