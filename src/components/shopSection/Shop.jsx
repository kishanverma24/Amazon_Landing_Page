import React from "react";
import "./shopSection.css";
function Shop() {
  return (
    <>
      <div className="shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Clothes</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box1_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Health & Personal Care</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box2_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Furniture</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box3_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Smartphones</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box4_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box5 box">
          <div className="box-content">
            <h2>Beauty picks</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box5_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box6 box">
          <div className="box-content">
            <h2>Pet Care</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box6_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box7 box">
          <div className="box-content">
            <h2>Tours and Travels</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box7_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box8 box">
          <div className="box-content">
            <h2>New Arivels</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url(../box8_image.jpg)" }}
            ></div>
            <p>See more</p>
          </div>
        </div>
      </div>
      <div style={{ height: "15px", backgroundColor: "#e2e7e6" }}></div>
    </>
  );
}

export default Shop;
