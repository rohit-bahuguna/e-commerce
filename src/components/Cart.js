import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import ShowCart from "./ShowCart";
import axios from "axios";

const Cart = () => {
  // const navigate = useNavigate();

  const cartData = useSelector((state) => state.cart.products);
  const loginData = useSelector((state) =>{state.login});
  console.log(loginData.loginStatus);

  const dispatch = useDispatch();
  console.log(cartData);

  const placeOrder = () => {
    console.log("order placed....");

    //dispatch for adding product in orders
    //navigate to orders page
  };

  // console.log("-----------cart data--------------", cartData);


  const getallcart = async () => {
    console.log(loginData.loginUsername.token);
    const url = "http://localhost:4000/cart/getallcart";
    const response = await axios
      .get(url, {
        headers: {
          authorization: loginData.loginUsername.token,
        },
      })
      .catch((error) => console.log(error));

    console.log("got all cart  -->>> ", response.data);

    if (response.data.length !== 0) {
      response.data.map((value) => {
        dispatch(addToCart(value.product));
        // console.log(value.product)
      });
    }
  };


  if(loginData.loginStatus){
    getallcart();
  }


  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          <h2>Cart</h2>
        </div>
      </div>

      <div className="row bg-success bg-opacity-10">
        {cartData.map((item) => {
          return <ShowCart product={item} key={item._id}></ShowCart>;
        })}

        <div>{/*  */}</div>
      </div>

      {/* <div className="row bg-info bg-opacity-10">
        <div className="col-6 text-center">
          <button className="btn btn-success" onClick={placeOrder}>
            Place Order
          </button>
        </div>
        <div className="col-6 text-center">
          <Link
            to="/productlist"
            className="btn btn-primary"
            onClick={placeOrder}
          >
            Continue Shopping
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
