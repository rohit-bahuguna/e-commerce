import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../redux/actions/loginAction";
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
      <div className="row bg-info bg-opacity-50">
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
      </div>
      <div className="row bg-warning bg-opacity-50">
        <div className="col-2">
          <Link to="/productlist">Home</Link>
        </div>
        <div className="col-2">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="col-2">
          <Link to="/orders">Orders</Link>
        </div>
        <div className="col-2">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="col-2">
          

          {loginData.loginStatus ? <Link to="/">
            <button className="btn btn-primary btn-sm" onClick={handleAuth}>
            Logout
            </button>
          </Link> : <Link to="/login">
            <button className="btn btn-primary btn-sm" onClick={handleAuth}>
            Login
            </button>
          </Link>}
          
        </div>
       
      </div>
    </>
  );
};

export default Header;
