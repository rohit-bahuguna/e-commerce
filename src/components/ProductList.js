import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";


const ProductList = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tempData = useSelector((state) => state.allProducts.products);
  //console.log("data from redux - ", tempData);

  // const loginData = useSelector((state) => state.login);
  // console.log('----login data from selector -----', loginData);
  // if(!loginData.loginStatus) {
  //     navigate('/');
  // }

  const fetchProductsList = () => {
    fetch("http://localhost:4000/product/")
      .then((data) => data.json())
      .then((response) => {
       console.log(response);
        // setData(response);
        // trigger action with data - type and payload;
        dispatch(setProducts(response));
      });
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <>
     

   <section className="product_section layout_padding">
      <div className="container">
         <div className="heading_container heading_center">
            <h2>
               Our <span>products</span>
            </h2>
         </div>
         <div className="row">
            {tempData &&
              tempData.map((temp, index) => (
              
                <div className="col-sm-4 col-md-4 col-lg-3">
                  <Link to={`/productdetail/${temp.id}`}>
                      
                    
               <div className="box">
                  {/* <div className="option_container">
                     <div className="options">
                        <Link to="#" className="option1">
                           Men's Shirt
                        </Link>
                        <Link to="#" className="option2">
                           Buy Now
                        </Link>
                     </div>
                  </div> */}
                  <div className="img-box">
                     <img src={temp.image} className="img-fluid " />
                    
                  </div>
                 
                  </div>
                   <div className="detail-box text-center text-danger text-opacity-75">
                     <h5 >
                        {temp.title}
                     </h5>
                     <h6 className="text-dark fs-5">
                          Price : {temp.price}
                     </h6>
                    </div>
                    </Link>
            </div>

              ))}
         </div>
      </div>
      
      
   </section>





    </>
  );
};

export default ProductList;

