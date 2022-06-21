import React, { useContext } from "react";
import { ToggleContext } from "../Context/ToggleContext";

export const Header = () => {
  const { toggleState, setToggleState, cardData } = useContext(ToggleContext);
  const toggle = (index) => {
    setToggleState(index);
    console.log(index);
  };
  return (
    <div className="header">
      <div
        className={toggleState === 1 ? "left tab-active" : "left"}
        onClick={() => {
          console.log("clicked Product");
          toggle(1);
        }}
      >
        Product
      </div>
      <div
        className={toggleState === 2 ? "right tab-active" : "right"}
        onClick={() => {
          console.log("clicked Card");
          toggle(2);
        }}
      >
        Card ({JSON.stringify(cardData.length)})
      </div>
    </div>
  );
};
