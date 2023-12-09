import React from "react";
import cinco from "../../assets/cinco.png"
import cuatro from "../../assets/cuatro.png"
import seis from "../../assets/seis.png"
import style from "../../componentes/paginaPrincipal/body.css"


const Body = () => {
  return (
   <>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img className="carousel-itemx" src={cinco}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="carousel-itemx" src={cuatro}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="carousel-itemx" src={seis}  alt="..."/>
    </div>
  </div>
 
</div>
   </>
  );
};

export default Body;
