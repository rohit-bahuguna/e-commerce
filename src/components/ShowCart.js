import React, { useState } from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowCart = (props) => {
  

  const { title, category, description, image, id , quantity , price} = props.product;
  const loginData = useSelector((state) => state.login);
  const removeCart = useSelector((state) => state.cart.products);
  const cartData = useSelector((state) => state.cart.products);
 
  const dispatch = useDispatch();
  console.log(id)


  const removeItem = async ()=>{
    const url = "http://localhost:4000/cart/deletefromcart/"+id

    const response = await axios.delete(url, {
      headers: {
        authorization: loginData.loginUsername.token,
      },
    }).catch((error) => console.log(error.massage))

    console.log("deleted" , response);
    if(response.data !== null){
      dispatch(removeFromCart(response.data._id))
    }
    
  }

 const removeItemfn =  () => {
    if(loginData.loginStatus){
      removeItem();
      toast.info("Removed from cart")
    }else {
      
        dispatch(removeFromCart(id))
      toast.info("Removed from cart")
    }
   
 }

  return (
    <>
      <ToastContainer/>
    

      
         
         <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-12">
               <div class="box">
                  <div class="option_container">
                     <div class="options" >
                  <button   type="button" class=" btn btn-outline-danger " onClick={removeItemfn}>  
                           Remove
                       </button>
                       <br/>
                  <div className="d-flex flex-row justify-content-between " > 
                          
                          <button type="button" class=" btn btn-outline-dark p-10">+</button>
                          <button type="button" class=" btn btn-outline-dark ">-</button>
                        </div>
                     </div>
                  </div>
                  <div class="img-box">
                       <img src={image} alt="" />
                      <div></div>
                  </div>
                  <div class="detail-box">
                     <h5>
                        {title}
                     </h5>
                     <h6>
                        {price}
                     </h6>
                  </div>
               </div>
            </div>
        
         </div>
      
    </>
  );
};

export default ShowCart;

/* 

<div className="row">
            <div className="col-6">
              <button className="col-6 ">+</button>
            </div>
            <div className="col-6">
              <button className="col-6 ">-</button>
            </div>
          </div>

*/
