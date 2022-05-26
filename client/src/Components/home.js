import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
import carousel1 from "./images/bus-image1.jpg"
import carousel2 from "./images/bus-image2.jpg"
import carousel3 from "./images/bus-image3.jpg"

const Home = () => {
  return (
    <>
      <h2 id="home-title">Bus Booking</h2>
      <div id="carouselExampleCaptions" class="carousel carousel-dark carousel-fade slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="services">
        <h2 id="service-title">Our Services</h2>

        <div className="container">
          <div className="row">
            <div className="card col-sm">
              <div class="card-body">
                <img src="..." class="card-img-top" alt="Card1" />
                <h5 class="card-title">Great Customer service</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
              </div>
            </div>

            <div className="card col-sm">
              <div class="card-body">
                <img src="..." class="card-img-top" alt="Card2" />
                <h5 class="card-title">Great Customer service</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
              </div>
            </div>

            <div className="card col-sm">
              <div class="card-body">
                <img src="..." class="card-img-top" alt="Card2" />
                <h5 class="card-title">Great Customer service</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="review">
       
      </div>


    </>
  )
}

export default Home
