import React, { useState } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="position-relative">
        <div
          className="bg-black position-absolute"
          style={{ width: "10px", height: "80px", top: "-80px", left: "35px" }}
        ></div>
        <div
          className="d-flex flex-column align-tems-center justify-content-center align-items-center bg-black rounded"
          style={{ width: "80px", height: "200px" }}
        >
          <div
            className="rounded-circle bg-danger"
            style={{
              width: "60px",
              height: "60px",
              boxShadow:
                color === "bg-danger"
                  ? "0px 0px 50px 20px rgb(219,241,190)"
                  : "none",
            }}
            onClick={() => handleClick("bg-danger")}
          ></div>
          <div
            className="rounded-circle bg-warning"
            style={{
              width: "60px",
              height: "60px",
              boxShadow:
                color === "bg-warning"
                  ? "0px 0px 50px 20px rgb(219,241,190)"
                  : "none",
            }}
            onClick={() => handleClick("bg-warning")}
          ></div>
          <div
            className="rounded-circle bg-success"
            style={{
              width: "60px",
              height: "60px",
              boxShadow:
                color === "bg-success"
                  ? "0px 0px 50px 20px rgb(219,241,190)"
                  : "none",
            }}
            onClick={() => handleClick("bg-success")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
