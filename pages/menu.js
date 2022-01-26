import { Row, Col } from "antd";
import { Popover, Button } from "antd";

import { useState } from "react";
import data from "./menu.json";

const menu = () => {
  const categories = [
    "Beverages",
    "Breakfast",
    "Burgers",
    "Chicken & Sandwiches",
    "Combo Meal",
    "Desserts",
  ];
  const [currentMenu, update_currentMenu] = useState("Beverages");

  const menuPopover = (m) => {
    return (
      <div>
        <div className="" style={{ fontSize: 14, fontWeight: 700 }}>
          {m.name}
        </div>
        <div className="font-medium" style={{}}>
          {"$25.99"}
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen pb-8" style={{ backgroundColor: "#0d0d0d" }}>
      <Row className="w-screen overflow-auto pt-10 md:pt-0">
        <Col className="flex" sm={24} xs={24} lg={0} md={0}>
          {categories.map((c) => (
            <Col md={0} lg={0}>
              <div
                className="text-white   pr-2 rounded-full pl-2 cursor-pointer   h-8 ml-4"
                style={{
                  fontSize: 20,
                  backgroundColor: c === currentMenu ? "red" : "rgba(0,0,0,0)",
                  overflow: "visible",
                }}
                onClick={() => update_currentMenu(c)}
              >
                {c}
              </div>
            </Col>
          ))}
        </Col>
      </Row>
      <Row className="pt-8  pt-8">
        <Col lg={6} md={6} sm={0} xs={0}>
          <div className="menu_bar pr-2 min-h-screen">
            {categories.map((c) => (
              <div
                className="text-white lg:ml-32 md:ml-8 sm:ml-4 mt-4 pr-2 rounded-full pl-4 cursor-pointer"
                style={{
                  fontSize: 20,
                  backgroundColor: c === currentMenu ? "red" : "rgba(0,0,0,0)",
                }}
                onClick={() => update_currentMenu(c)}
              >
                {c}
              </div>
            ))}
          </div>
        </Col>
        <Col lg={18} md={18} sm={24} xs={24} className="pl-4 pr-4">
          <div
            className="text-center text-white"
            style={{ fontSize: 32, fontWeight: 800 }}
          >
            {currentMenu}
          </div>
          <Row className="pt-2 bg-white mt-4 pb-8">
            {data[currentMenu] &&
              data[currentMenu].map((m) => (
                <Col lg={8} md={8} sm={12} xs={24} className="px-4 pt-8">
                  <Popover content={() => menuPopover(m)} placement="right">
                    <img src={m.image} className="mr-auto ml-auto" />
                    <div
                      className="mt-4 text-center text-black"
                      style={{ fontSize: 16, fontWeight: 600 }}
                    >
                      {" "}
                      {m.name}
                    </div>
                  </Popover>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default menu;
