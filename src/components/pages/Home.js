import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './inc/VMC';
import Service1 from '../images/img1.jpg';
import Service2 from '../images/img2.jpg';
import Service3 from '../images/img3.jpg';

function Home(){
      return (
        <div>
          <Slider/>
      
     <section className="section">
        <div className="container">
           <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="main-heading">Our Resturant</h3>
                <div className="underline mx-auto"></div>
                <p>"Welcome to Taste Food, where every meal is a celebration of flavor and quality. Our passion for food is reflected in every dish we create, using the freshest ingredients and time-honored recipes. Whether you're here for a quick bite or a leisurely dining experience, we promise to delight your taste buds and warm your heart. Join us and embark on a culinary journey that you'll cherish with every bite."</p>
             <Link to="/about" className="btn btn-warning shadow">Read more</Link>
            </div>
             
           </div>
       </div>
     </section>
{/*------VISION MISSIOPN VALUE----*/}
     <VMC/>

     {/*-----SERVICES---*/}

     <section className="section border-top">
        <div className="container">
           <div className="row">
            <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Services</h3>
                <div className="underline mx-auto"></div>
            </div>
             
        <div className="col-md-4">
            <div className="card shadow">
            <img src={Service1} className="w-100 border-bottom" alt="services"/>
            <div className="card-body">
             <h6>Dine-In Experience</h6>
             <div className="underline"></div>
             <p> We offer a welcoming and elegant dine-in experience where guests can savor our delicious dishes in a warm and inviting atmosphere. Our attentive staff ensures that every visit is memorable and enjoyable.</p>
            </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card shadow">
            <img src={Service2} className="w-100 border-bottom" alt="services"/>
            <div className="card-body">
             <h6>Catering Services</h6>
             <div className="underline"></div>
             <p> Whether it's a corporate event, a wedding, or a private party, our catering services bring  special occasion. We provide customized menus and professional service to make your event a culinary .</p>
            </div>
            </div>
        </div>
        
        <div className="col-md-4">
            <div className="card shadow">
            <img src={Service3} className="w-100 border-bottom" alt="services"/>
            <div className="card-body">
             <h6>Online Ordering and Delivery</h6>
             <div className="underline"></div>
             <p> Enjoy our delectable meals from the comfort of your home with our convenient online ordering and delivery service. Browse our  dishes delivered straight to your doorstep, fresh and ready to eat.</p>
            </div>
            </div>
        </div>


           </div>
       </div>
     </section>

       </div>
      );
}

export default Home;
