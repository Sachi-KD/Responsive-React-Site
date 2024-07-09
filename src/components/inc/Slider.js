import React from 'react';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';

function Slider(){
    return(
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" alt="..." style={{ height: "600px" }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Spicy</h5>
        <p><b>"Life is uncertain. Eat dessert first."</b></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider2} class="d-block w-100" alt="..." style={{ height: "600px" }} />
      <div class="carousel-caption d-none d-md-block">
        <h5>Grave rice</h5>
        <p><b>"Food is not just eating energy. It's an experience."</b> </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" alt="..." style={{ height: "600px" }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Pizza Fisher</h5>
        <p><b>"First we eat, then we do everything else."</b></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Slider;