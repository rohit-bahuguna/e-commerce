import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import ShowCart from "./ShowCart";
import axios from "axios";

const Cart = () => {
  // const navigate = useNavigate();

  const cartData = useSelector((state) => state.cart.products);
 //console.log(cartData[0]._id)
console.log(cartData);

  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">
          <h2>Cart</h2>
        </div>
      </div>

      <div className="row bg-success bg-opacity-10">
        {cartData && cartData.map((item) => {
               // console.log(item.id)
          return <ShowCart product={item}  key={item.id }></ShowCart>;
        })}

        
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
