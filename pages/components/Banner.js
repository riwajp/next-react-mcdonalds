import React from "react";
import { Row, Col } from "antd";
import { useState } from "react";

const Banner = () => {
  const [selectedFood, setSelectedFood] = useState("burger");
  const icons = {
    burger: "reshot-icon-burger-TKSB4YUJ2Z.svg",
    food_addiction: "reshot-icon-food-addiction-KME7TXCDG4.svg",
    nuggets: "reshot-icon-nuggets-G4XFTBKSLP.svg",
    fries1: "reshot-icon-fries-JWS39QHK6Z.svg",
    fries2: "reshot-icon-fries-QJYSGUR7B8.svg",
    iced_drink: "reshot-icon-drink-with-ice-CRB7AJQE8U.svg",
  };
  const iconsForBar = Object.keys(icons).filter((i) => i !== selectedFood);

  const iconsBar = iconsForBar.map((i) => (
    <img
      src={"/" + icons[i]}
      className="w-6 mt-2 md:mt-6 sm:w-10 md:w-10 lg:w-16 lg:mt-7 cursor-pointer "
      onClick={() => setSelectedFood(i)}
    />
  ));

  function decreaseSelectedFood() {
    const currentFoodIconIndex = Object.keys(icons).indexOf(selectedFood);
    var newFoodIconIndex;
    if (currentFoodIconIndex === 0) {
      newFoodIconIndex = 5;
    } else {
      newFoodIconIndex = currentFoodIconIndex - 1;
    }
    setSelectedFood(Object.keys(icons)[newFoodIconIndex]);
  }

  function increaseSelectedFood() {
    const currentFoodIconIndex = Object.keys(icons).indexOf(selectedFood);
    var newFoodIconIndex;
    if (currentFoodIconIndex === 5) {
      newFoodIconIndex = 0;
    } else {
      newFoodIconIndex = currentFoodIconIndex + 1;
    }
    setSelectedFood(Object.keys(icons)[newFoodIconIndex]);
  }
  return (
    <div
      className="w-full h-52 sm:h-80 md:h-1/2"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Row>
        <Col lg={2} md={2} sm={2} xs={3} />
        <Col lg={8} md={8} sm={8} xs={7} className="text-white flex">
          <div
            style={{
              color: "#ffb655",
            }}
            className="mt-16 md:mt-32   "
          >
            <div
              style={{ lineHeight: 0.8, fontFamily: "'Fira Sans', sans-serif" }}
              className="text-4xl   md:text-8xl  lg:text-9xl sm:text-7xl"
            >
              I'M <br />
              LOVIN'
              <br /> IT
            </div>

            <button className="btn-font bg-white text-black mt-2  md:mt-4 px-4 py-2 md:px-8 md:py-4 rounded-full ">
              ORDER NOW
            </button>
          </div>
        </Col>
        <Col lg={13} md={12} sm={14} xs={14}>
          <Row className=" mt-0 md:mt-2 ml-8">
            <Col span={16} style={{}}>
              <div
                style={{
                  maxHeight: 420,
                  borderStyle: "solid",
                  borderColor: "grey",
                  borderRightWidth: 1,
                }}
              >
                <img
                  src={"/" + icons[selectedFood]}
                  style={{ maxHeight: 420 }}
                  className="h-32 mt-8 md:mt-12 sm:h-56 md:h-96 "
                />
              </div>
              <div className="mb-32 lg:mr-8 flex justify-center items-center">
                <div
                  className="  mr-2 px-1 py-1 rounded-2xl arrow"
                  style={{ backgroundColor: "#F0F0F0" }}
                >
                  <img
                    src="/left-arrow.png"
                    className="w-3 sm:w-6 md:w-6"
                    onClick={() => decreaseSelectedFood()}
                  />
                </div>
                <div
                  className=" ml-2 px-1 py-1 rounded-2xl arrow"
                  style={{ backgroundColor: "#F0F0F0" }}
                >
                  <img
                    src="/right-arrow.png"
                    className="w-3 sm:w-6 md:w-6 "
                    onClick={() => increaseSelectedFood()}
                  />
                </div>
              </div>
            </Col>
            <Col span={8} className="text-white pl-4">
              <div className="pt-4 sm:pt-16 md:pt-12 lg:pt-0">{iconsBar}</div>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={0} sm={0} xs={0} />
      </Row>
    </div>
  );
};

export default Banner;
