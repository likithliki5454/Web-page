import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
export default function App() {
  return (
    // <div style={{ display: "block", width: 1000, padding: 30 }}>
    <div id="style">
      <Carousel>
        <Carousel.Item>
          <img
            id="im1"
            className="d-block w-100"
            src="./img\im4.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>
              Nutrisystem is a fad diet which consists of fruits, vegetables,
              nuts, fresh meats, dairy, and other foods
            </h3>
            <p>Lose weight for 2022</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="im2"
            className="d-block w-100"
            src="./img\im2.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>We deliver balanced nutrition, powered by proven science</h3>
            <p>Stick to the plan.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="im3"
            className="d-block w-100"
            src="./img\im3.jpg"
            alt="Image One"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="im4"
            className="d-block w-100"
            src="./img\im9.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>
              Our meals are filling, flavorful and fully prepared. Just heat,
              eat and repeat!
            </h3>
            <p>Order the food.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
