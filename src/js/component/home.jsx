import React, { useState } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([
    "bg-danger",
    "bg-warning",
    "bg-success",
  ]);
  const [index, setIndex] = useState(0);
  const [purple, setPurple] = useState(false);

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleToggleColor = () => {
    const nextIndex = (index + 1) % colors.length;
    setIndex(nextIndex);
    setColor(colors[nextIndex]);
  };

  const handlePurple = () => {
    if (!purple) {
      setColors([...colors, "bg-purple"]);
    } else {
      setColors(colors.filter((c) => c !== "bg-purple"));
    }
    setPurple(!purple);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="position-relative mb-4">
        <div
          className="bg-black position-absolute"
          style={{ width: "10px", height: "80px", top: "-80px", left: "35px" }}
        ></div>
        <div
          className="d-flex flex-column align-items-center justify-content-center bg-black rounded"
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
          {purple && (
            <div
              className="rounded-circle"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "purple",
                boxShadow:
                  color === "bg-purple"
                    ? "0px 0px 50px 20px rgb(219,241,190)"
                    : "none",
              }}
              onClick={() => handleClick("bg-purple")}
            ></div>
          )}
        </div>
      </div>

      <div className="d-flex flex-column align-items-center space-y-4">
        <button
          className="bg-blue-500 text-dark py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mb-2"
          onClick={handleToggleColor}
        >
          Alternar color
        </button>

        <button
          className="bg-purple-500 text-dark py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
          onClick={handlePurple}
        >
          {purple ? "Eliminar color púrpura" : "Añadir color púrpura"}
        </button>
      </div>
    </div>
  );
};

export default Home;
