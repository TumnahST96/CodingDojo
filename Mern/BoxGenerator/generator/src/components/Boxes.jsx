import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Boxes = (props) => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      {props.boxes.map((item, i) => {
        return (
          <div
            className="m-3"
            key={i}
            style={{
              backgroundColor: item.color,
              width: item.size,
              height: item.size,
            }}
          ></div>
        );
      })}
    </section>
  );
};

export default Boxes;
