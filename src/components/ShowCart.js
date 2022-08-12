import React, { useState } from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
const ShowCart = (props) => {
  

  const { title, category, description, image, id , quantity} = props.product;
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

    }else {
      
        dispatch(removeFromCart(id))
      
    }
   
 }

  return (
    <>
      <div className="row ">
        <div className="row">
          <table className="table table-bordered">
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>

            <tr>
              <td>1</td>
              <td>{title}</td>
              <td>
                <img
                  src={image}
                  style={{ "max-width": 100 }}
                  className="img-fluid"
                  alt="img"
                />
              </td>
              <td>{title}</td>
              <td>1</td>
              <td>{title}</td>
            </tr>
          </table>
        </div>

        <div className="row">
          <div className="col-1">
            <button className="bg-red" onClick={'updateQuantity'}>+</button>
          </div>
          <p className="col-1">{quantity}</p>
          <div className="col-1">
            {" "}
            <button className="bg-red">-</button>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-12 float-end">
                {" "}
                <button className="float-end" onClick={removeItemfn} >Remeve Item</button>
              </div>
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
