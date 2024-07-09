import React from 'react';
import VMC from './inc/VMC';

function Aboutus(){
      return (
       <div>
          
<section className="py-4 bg-info"> 
    <div className="container">
<div className="row">
<div className="col-md-4 my-auto"> 
    <h4> About Us</h4>
</div>
<div className="col-md-8 my-auto">

</div>
</div>
</div>
</section>

<section className="section bg-c-light border-bottom">
<div className="container">
<h5 className="main-heading">Our Resturant</h5>
<div className="underline"></div>
<p>
"Welcome to Taste Food, where every meal is a celebration of flavor and quality. Our passion for food is reflected in every dish we create, using the freshest ingredients and time-honored recipes. Whether you're here for a quick bite or a leisurely dining experience, we promise to delight your taste buds and warm your heart. Join us and embark on a culinary journey that you'll cherish with every bite."
</p>
</div>
</section>
 
 {/*----vision mission--*/}
 <VMC/>

       </div>

      );
}

export default Aboutus;
