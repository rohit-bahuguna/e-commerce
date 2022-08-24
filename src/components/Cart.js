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
let price = 0
  return (
    <>
      <section class="product_section layout_padding">
        <div className="container d-flex flex-lg-row justify-around flex-md-row">
           <div class="container flex-grow-1">

      
        {cartData && cartData.map((item) => {
               // console.log(item)
          price += item.price
          return <ShowCart product={item}  key={item.id }></ShowCart>;
        })}

        
          </div>
          
        <div className="container">
          
         <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-12">
               <div class="box">
                  
              <div className=" d-flex flex-column justify-content-start text-left ">
                    <h5>Price <span>  {cartData.length} items</span> : <span> ₹{price}</span></h5>
                    <h5>Discount <span> : 0</span> </h5>
                    <h5>Delivery Charges <span> : 0</span></h5>
                    <h5> Secured Packaging Fee <span> : 0</span></h5>
                    </div>
              
                  <div class="detail-box">
                     <h5>
                        Total Amount
                     </h5>
                     <h6>
                        {price}
                     </h6>
                  </div>
                   <div class="options d-flex flex-row justify-content-around">
                        <Link to="/productlist"><button   type="button" class="btn btn-outline-danger">
                           Shop More
                        </button></Link>
                        <button   type="button" class="btn btn-outline-danger">
                           Order Now
                        </button>
                     </div>
               </div>
            </div>
        
         </div>
      
        </div>
     </div>
</section>
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
