import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="hero_area">


 <section class="slider_section ">
         <div className="slider_bg_box">
            <img src="images/slider-bg.jpg" alt=""/>
         </div>
         <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container ">
                     <div className="row">
                        <div className="col-md-7 col-lg-6 ">
                           <div className="detail-box">
                              <h1>
                                 <span>
                                    Sale 20% Off
                                 </span>
                                 <br/>
                                 On Everything
                              </h1>
                              <p>
                                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse
                                 dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto
                                 veritatis delectus repellat modi impedit sequi.
                              </p>
                              <div className="btn-box">
                                 <Link to="" className="btn1">
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item ">
                  <div className="container ">
                     <div className="row">
                        <div className="col-md-7 col-lg-6 ">
                           <div className="detail-box">
                              <h1>
                                 <span>
                                    Sale 20% Off
                                 </span>
                                 <br/>
                                 On Everything
                              </h1>
                              <p>
                                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse
                                 dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto
                                 veritatis delectus repellat modi impedit sequi.
                              </p>
                              <div className="btn-box">
                                 <Link to="" className="btn1">
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container ">
                     <div className="row">
                        <div className="col-md-7 col-lg-6 ">
                           <div className="detail-box">
                              <h1>
                                 <span>
                                    Sale 20% Off
                                 </span>
                                 <br/>
                                 On Everything
                              </h1>
                              <p>
                                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse
                                 dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto
                                 veritatis delectus repellat modi impedit sequi.
                              </p>
                              <div className="btn-box">
                                 <Link to="" className="btn1">
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <ol className="carousel-indicators">
                  <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                  <li data-target="#customCarousel1" data-slide-to="1"></li>
                  <li data-target="#customCarousel1" data-slide-to="2"></li>
               </ol>
            </div>
         </div>
            </section>
            {/* why_section  */}
            
            <section className="why_section layout_padding">
      <div className="container">
         <div className="heading_container heading_center">
            <h2>
               Why Shop With Us
            </h2>
         </div>
         <div className="row">
            <div className="col-md-4">
               <div className="box ">
                  <div className="img-box">
                     <img src="./images/fast-delivery-truck-svgrepo-com.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                     <h5>
                        Fast Delivery
                     </h5>
                     <p>
                        variations of passages of Lorem Ipsum available
                     </p>
                  </div>
               </div>
            </div>

            <div className="col-md-4">
               <div className="box ">
                  <div className="img-box">
                     <img src="./images/quality-svgrepo-com.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                     <h5>
                        Best Quality
                     </h5>
                     <p>
                        variations of passages of Lorem Ipsum available
                     </p>
                  </div>
               </div>
            </div>

            <div className="col-md-4">
               <div className="box ">
                  <div className="img-box">
                     <img src="./images/free-delivery-free-svgrepo-com.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                     <h5>
                        Free Shiping
                     </h5>
                     <p>
                        variations of passages of Lorem Ipsum available
                     </p>
                  </div>
               </div>
            </div>

         </div>
      </div>
            </section>
            
{/* arrival_section */}
         <section class="arrival_section">
      <div class="container">
         <div class="box">
            <div class="arrival_bg_box">
               <img src="images/arrival-bg.png" alt=""/>
            </div>
            <div class="row">
               <div class="col-md-6 ml-auto">
                  <div class="heading_container remove_line_bt">
                     <h2>
                        #NewArrivals
                     </h2>
                  </div>
                  <p>
                     Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit
                     earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                  </p>
                  <Link to="">
                     Shop Now
                  </Link>
               </div>
            </div>
         </div>
      </div>
            </section>
            

            <section className="product_section layout_padding">
      <div className="container">
         <div className="heading_container heading_center">
            <h2>
               Our <span>products</span>
            </h2>
         </div>
         <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
               <div className="box">
                  <div className="option_container">
                     <div className="options">
                        <Link to="" className="option1">
                           Men's Shirt
                        </Link>
                        <Link to="" className="option2">
                           Buy Now
                        </Link>
                     </div>
                  </div>
                  <div className="img-box">
                     <img src="images/p1.png" alt=""/>
                  </div>
                  <div className="detail-box">
                     <h5>
                        Men's Shirt
                     </h5>
                     <h6>
                        $75
                     </h6>
                  </div>
               </div>
            </div>

         </div>
         <div className="btn-box">
            <Link to="">
               View All products
            </Link>
         </div>
      </div>
   </section>

        </div>
    )
}


export default  Home; 