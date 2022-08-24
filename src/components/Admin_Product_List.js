import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";
import { deleteProduct } from "../redux/actions/productActions";

const Admin_Product_List = () => {
  
  const dispatch = useDispatch();
  
  const tempData = useSelector((state) => state.allProducts.products);
  console.log("data from redux - ", tempData);

 

  const fetchProductsList = () => {
    fetch("http://ecommerceapibyrohitbahuguna.herokuapp.com/product")
      .then((data) => data.json())
      .then((response) => {
        // console.log(response);
        // setData(response);
        // trigger action with data - type and payload;
        dispatch(setProducts(response));
      });
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const updateFn = async (id) => {
    console.log("hit api for product update - PUT API");
  };

  const deleteFn = async (id) => {
    console.log("hit api for product delete - DELETE API");
    const url = `http://ecommerceapibyrohitbahuguna.herokuapp.com/product/${id}`;
    const response = await axios.delete(url);
    console.log("from list", response);
   if(response.data.deletedCount == 1){
    dispatch(deleteProduct(id))
   }
  };

  return (
    <>
      <div className="row bg-success bg-opacity-50">
        <div className="col-12">HomePage - Product List</div>
      </div>

      <div className="row bg-success bg-opacity-10">
        <div className="col-12">
          <table>
           <thead>
             <tr>
             <th>Sr.No</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
             </tr>
              
           </thead>
            <tbody>
            {tempData &&
              tempData.map((temp, index) => (
                <tr key={index + temp.title} className="product-item">
                  <td>{index}</td>
                  <td>{temp.id}</td>
                  <td>
                    <Link to={`/productdetail/${temp.id}`}>{temp.title}</Link>
                  </td>
                  <td>{temp.price}</td>
                  <td >
                    <button
                      className="btn btn-warning "
                      onClick={() => updateFn(temp.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteFn(temp.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin_Product_List;
