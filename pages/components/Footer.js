import React from "react"
const Footer = () => {
  return (
    <div
      className="w-full h-32  "
      style={{ backgroundColor: "#1e1e1e", display: "inline-block" }}
    >
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: 400,
          display: "flex",
          color: "white",
          marginTop: 50,
          textAlign: "center",
          fontFamily: "'Dongle', sans-serif",
          wordSpacing: 6,
          fontSize: 15,
          letterSpacing: 3,
        }}
      >
        &copy; 2017 - 2022 McDonald's. All Rights Reserved
      </div>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: 150,
          display: "flex",
        }}
        className="mt-1"
      >
        <img
          src="https://img.icons8.com/color/96/000000/facebook-new.png"
          className="w-6 ml-0"
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
          className="w-6 ml-8"
        />
        <img
          src="https://img.icons8.com/fluency/48/000000/twitter.png"
          className="w-6 ml-8"
        />
      </div>
    </div>
  )
}

export default Footer
