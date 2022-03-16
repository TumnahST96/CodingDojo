import React from "react";

const Tab = (props) => {
  return (
    <div>
      {props.tab.map((item, i) => {
        return <h1 key={i}>{props.current == i ? item.info : ""}</h1>;
      })}
    </div>
  );
};

export default Tab;
