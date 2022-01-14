import React, { useState } from "react";

const Laptop = (props) => {
  const [show, setShow] = useState(false);
  function toggle() {
    setShow(!show);
  }
  const btnText = show ? "Show less" : "Show more";
  return (
    <div>
      <h1>{props.laptop.name}</h1>
      {show && (
        <>
          <p>{props.laptop.brand}</p>
          <p>{props.laptop.weight}</p>
        </>
      )}
      <button onClick={toggle}>{btnText}</button>
    </div>
  );
};
export default Laptop;
