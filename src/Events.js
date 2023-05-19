import React from "react";

const Events = () => {
  const handlClick = (q) => {
    q.preventDefault();
    console.log("Link was pressed");
  };
  return (
    <>
      <button onClick={() => console.log("I was pressed")}>Click me </button>
      <input onChange={(e) => console.log(e.target.value)} />
      <a href="www.google.com" onClick={handlClick}>
        it is not link, it is console.log("Link was pressed"))
      </a>
    </>
  );
};

export default Events;
