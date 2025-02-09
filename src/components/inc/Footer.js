import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
return(
     
<section className="section footer bg-dark text-white"> 
    <div className="container">
<div className="row">
<div className="col-md-4">
<h6>Resturant Information</h6>
<hr/>
<p className="text-white">
Taste food was founded in 2000 by Mr.perera with a vision to create a culinary haven that celebrates in panadura region. Over the years, we have grown from a small, family-owned establishment to a beloved dining destination known for our commitment to quality, innovation, and exceptional service.
</p>
</div>


<div className="col-md-4">
<h6>Quick Links</h6>
<hr/>
<div><Link to="/">Home</Link></div>
<div><Link to="/about">About</Link></div>
<div><Link to="/">Contact</Link></div>
<div><Link to="/">Blog</Link></div>
</div>

<div className="col-md-4">
<h6>Contact Information</h6>
<hr/>
<div><p className="text-white mb-1">210/10, Hirana Panadura. Sri Lanka</p></div>
 <div><p className="text-white mb-1">+03825469989</p></div>
  <div><p className="text-white mb-1">+07755693338</p></div> 
  <div><p className="text-white mb-1">email@tastefood.com</p></div>
</div>
</div>
</div>
</section>
);


}

export default Footer;