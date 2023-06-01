import React, { useState } from "react";
import "./Ref2.css";

function Ref2() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const add = () => {
    setArr((arr) => [...arr, arr[arr.length - 1] + 1]);
    console.log(arr);
  };
  const ulElem = document,querySelector('ul');
  return (
    <div>
      <ul className="list">
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={add}>Добавить число </button>
      <button>Отключить/включить скролл</button>
    </div>
  );
}
export default Ref2;
