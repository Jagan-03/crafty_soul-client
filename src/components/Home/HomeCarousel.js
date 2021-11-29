import React from "react";

const HomeCarousel = () => {
  return (
      <div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-mdb-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active text-center">
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
        <div class="carousel-item text-center">
          <img
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
        <div class="carousel-item text-center">
          <img
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            class="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="prev"
      >
        <i class="fas fa-angle-left fa-2x text-light"></i>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="next"
      >
        <i class="fas fa-angle-right fa-2x text-light"></i>
      </button>
    </div>
      </div>
  );
};

export default HomeCarousel;
