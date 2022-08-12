import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productDetailActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id from list page - ", id);

  let tempProduct = {};

  tempProduct = useSelector((state) => state.selectedProduct);
  //console.log("---data from selected product store - ", tempProduct);

  const loginData = useSelector((state) => state.login);
  // console.log("----login data from selector -----", loginData.loginStatus);

  const cartData = useSelector((state) => state.cart);
  // console.log('----login data from selector for cart -----', cartData);

  const fetchProductDetail = async () => {
    const url = "http://localhost:4000/product/" + id;
    const response = await axios.get(url);

    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const addtoCart = async () => {
    dispatch(addToCart(tempProduct));
    // add to cart api call from here
    if (loginData.loginStatus) {
      const url = "http://localhost:4000/cart/addtocart";
      let product = {
        id: tempProduct.id,
        title: tempProduct.title,
        price: tempProduct.price,
        description: tempProduct.description,
        image: tempProduct.image,
        category: tempProduct.category,
        quantity: 1,

      };

      // console.log("product", product);

      const response = await axios
        .post(url, product, {
          headers: {
            authorization: loginData.loginUsername.token,
          },
        })
        .catch((err) => console.log("erroe----->", err));

      console.log("product added to cart");
    }
  };

  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">Product Detail</div>
      </div>
      <div className="row bg-info bg-opacity-10">
        <div className="col-4">
          <img src={tempProduct.image} className="img-fluid image" />
        </div>
        <div className="col-4">
          <h2>{tempProduct.title || " "}</h2>
          <h2>{tempProduct.price || " "}</h2>
          <h3>{tempProduct.category || " "}</h3>
          <p>{tempProduct.description || " "}</p>
        </div>
        <div className="col-4">
          <div className="col-12">
            {cartData.products
              .map((temp) => temp.id)
              .indexOf(tempProduct.id) !== -1 ? (
              <Link to="/cart">Go to Cart</Link>
            ) : (
              <button className="cart" onClick={addtoCart}>
                Add to Cart
              </button>
            )}
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <button>Add to Wishlist</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
