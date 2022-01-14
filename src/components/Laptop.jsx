import React, { useState } from "react";

const Laptop = (props) => {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  const btnText = show ? "Show less" : "Show more";
  return (
    <div>
      <h2>{props.laptop.name}</h2>
      {show && (
        <>
          <p>{props.laptop.brand}</p>
          <p>{props.laptop.weigth}</p>
        </>
      )}
      <button onClick={toggle}>{btnText}</button>
    </div>
  );
};
export default Laptop;
