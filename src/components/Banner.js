import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <section id="home">
      <Carousel>
      <Carousel.Item>
        <img
          class="d-block carouselimage"
          src="https://img.freepik.com/free-photo/flat-lay-circular-frame-with-delicious-fast-food_23-2148308815.jpg"
          alt="First slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Mealoo Aims at to Give</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src="https://media.istockphoto.com/id/1415605166/photo/businesswoman-working-at-laptop-with-fast-food-on-restaurant-table.webp?b=1&s=170667a&w=0&k=20&c=oXtU21a6tFAuoBQqVmzCPEqIGIC1pAycDsiQFMNsZxg="
          alt="Second slide"
        ></img>
        <Carousel.Caption className="CarouselCaption carouselquote">
          <h3>Good Food at Quality</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src="https://media.post.rvohealth.io/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"
          alt="Third Slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Better Food at Low cost</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          class="d-block carouselimage"
          src="https://t3.ftcdn.net/jpg/02/64/90/06/360_F_264900613_gyEqfKXm6Z10QBcfVWOO1OU00RudRs1y.jpg"
          alt="Third Slide"
        ></img>
        <Carousel.Caption className="CarouselCaption">
          <h3>Best Food for Healthy Diet</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
};

export default Banner;
