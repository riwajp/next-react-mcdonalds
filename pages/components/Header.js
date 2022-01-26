import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { Drawer, Button } from "antd";
import { useState } from "react";

const Header = (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const logoUrl =
    "https://www.allsgpromo.com/wp-content/uploads/McDonalds-logo.png";
  return (
    <div>
      <Row className="h-14 w-full py-2">
        <Col className="" lg={5} md={2} sm={3} xs={0}>
          <img src={logoUrl} className="h-10 float-right" />
        </Col>
        <Col lg={5} md={2} sm={0} xs={0}></Col>
        <Col className="" lg={14} md={20} sm={21} xs={0}>
          <Row
            className=" py-1 flex justify-center items-center text-3xl  pb-4"
            style={{ fontFamily: "'Dongle', sans-serif" }}
          >
            <Col
              lg={3}
              md={4}
              sm={5}
              xs={4}
              className="text-center  cursor-pointer "
            >
              <Link href="/">
                <span className="text-black hover:text-red-600 transition-colors link">
                  home
                </span>
              </Link>
            </Col>
            <Col
              lg={3}
              md={4}
              sm={5}
              xs={4}
              className="text-center cursor-pointer "
            >
              <Link href="/about">
                <span className="text-black hover:text-red-600 transition-colors link">
                  about
                </span>
              </Link>
            </Col>
            <Col
              lg={3}
              md={4}
              sm={5}
              xs={4}
              className="text-center cursor-pointer "
            >
              <Link href="/menu">
                <span className="text-black hover:text-red-600 transition-colors link">
                  menu
                </span>
              </Link>
            </Col>
            <Col lg={5} md={8} sm={6} xs={9} className="text-center  ">
              <button
                style={{
                  backgroundColor: "#ff3501",
                }}
                className=" text-lg text-white px-4 rounded-full   pt-0.5  cursor-pointer order_btn  "
              >
                Order Now
              </button>
            </Col>
          </Row>
        </Col>

        <Col className="" xs={4} sm={0} md={0} lg={0}>
          <img src={logoUrl} className="h-10 " />
        </Col>
        <Col
          xs={16}
          sm={0}
          md={0}
          lg={0}
          className="text-yellow-400 text-xl font-bold mt-1"
          style={{
            fontFamily: "'Mochiy Pop P One', sans-serif",
            textAlign: "center",
          }}
        >
          Mc Donald's
        </Col>
        <Col xs={4} sm={0} md={0} lg={0}>
          <Button onClick={showDrawer}>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/menu+nav+navigation+icon-1320073183300645803.png"
              className="float-right w-12"
            />
          </Button>
        </Col>
      </Row>

      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        visible={visible}
        className="text-center"
      >
        <img src={logoUrl} className="h-32 ml-auto mr-auto" />
        <div className="mt-8">
          <p>
            {" "}
            <Link href="/">
              <span
                className="text-black hover:text-red-600 transition-colors link"
                style={{ fontSize: 48 }}
                onClick={onClose}
              >
                home
              </span>
            </Link>
            <hr />
          </p>
          <p>
            {" "}
            <Link href="/about">
              <span
                className="text-black hover:text-red-600 transition-colors link"
                style={{ fontSize: 48 }}
                onClick={onClose}
              >
                about
              </span>
            </Link>
            <hr />
          </p>
          <p>
            {" "}
            <Link href="/menu">
              <span
                className="text-black hover:text-red-600 transition-colors link"
                style={{ fontSize: 48 }}
                onClick={onClose}
              >
                menu
              </span>
            </Link>
            <hr />
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
