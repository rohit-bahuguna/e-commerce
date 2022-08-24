import React, { useRef, useState } from "react";
import axios from "axios";
import uuid from 'react-uuid'

const Admin_Add_Product = () => {


 
  
  let titleRef = useRef();
  let priceRef = useRef();
  let descRef = useRef();
  let categoryRef = useRef();
  let imageRef = useRef();
  let errorRef = useRef();
console.log(uuid())

  const addProductFn = async () => {
    let obj = {};
    obj.id = uuid();
    obj.title = titleRef.current.value;
    obj.price = priceRef.current.value;
    obj.description = descRef.current.value;
    obj.image = imageRef.current.value;
    obj.category = categoryRef.current.value;

    titleRef.current.value = '';
    priceRef.current.value = '';
     descRef.current.value = '';
    imageRef.current.value = '';
    categoryRef.current.value = '';
    titleRef.current.focus()
    

    console.log(obj);

    if (
      obj.id !== "" &&
      obj.title !== "" &&
      obj.price !== "" &&
      obj.category !== ""
    ) {
      
      const url = "http://ecommerceapibyrohitbahuguna.herokuapp.com/product/";

      const response = await axios
        .post(url, obj)
        .catch((err) => console.log(err));
      console.log(response);
      errorRef.current.textContent = "";
    } else {
      errorRef.current.textContent = "Plz fill all the values.";
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex flex-column p-5">
          
          Title:
          <input type="text"  ref={titleRef} />
        
          Price:
          <input type="text" ref={priceRef} />
          
          Description:
          <input type="text" ref={descRef} />
          
          Category:
          <input type="text" ref={categoryRef} />
          
          Image:
          <input type="text" ref={imageRef} />
          
          <button className="btn btn-primary mt-3" onClick={addProductFn}>
            Add Product
          </button>
        </div>
        <div className="text-danger" ref={errorRef}></div>
      </div>
    </>
  );
};

export default Admin_Add_Product;
