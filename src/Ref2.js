import React, { useEffect, useRef, useState } from "react";
import "./Ref2.css";

function Ref2() {
  //let ulElem;
  const ulRef = useRef();
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const add = () => {
    setArr((arr) => [...arr, arr[arr.length - 1] + 1]);
    console.log(arr);
  };


  const handleScroll = () => console.log('was scroll');


  useEffect(() => {
    // ulElem = document.querySelector('ul');
    // ulElem.addEventListener('scroll', handleScroll)
    ulRef.current.addEventListener('scroll', handleScroll)

  }, [])
  // useEffect(() => console.log(ulElem))

  const removeScroll = () => {
    //ulElem.removeEventListener('scroll', handleScroll)
    ulRef.current.removeEventListener('scroll', handleScroll)
  }
  return (
    <div>
      <ul className="list" ref={ulRef}>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={add}>Добавить число </button>
      <button onClick={removeScroll}>Отключить/включить скролл</button>
    </div>
  );
}
export default Ref2;
