import React from "react";
import axios from "axios";

const ShowCart = (props) => {
  const { title, category, description, image, _id } = props.product;

const id = "62e961fd57210480ae138bd7"
 const removeItemfn = async () => {
    const url = "http://localhost:4000/cart/deletefromcart/"+id
    const response = await axios.delete(url).catch((error) => console.log(error.massage))
    console.log("deleted" , response);
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
            <button className="bg-red">+</button>
          </div>
          <div className="col-1">
            {" "}
            <button className="bg-red">-</button>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10 float-end">
                {" "}
                <button className="float-end" onClick={removeItemfn}>Remeve Item</button>
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
