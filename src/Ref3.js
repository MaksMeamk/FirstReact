import React, { useEffect, useRef, useState } from "react";
import "./Ref2.css";

function Ref3() {

    let ulRef = useRef()
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const add = () => {
        setArr((arr) => [...arr, arr[arr.length - 1] + 1]);
        console.log(arr);
    };
    const start = () => {
        ulRef.current = setInterval(add, 1000)
    }
    const stop = () => {
        clearInterval(ulRef.current)
    }




    return (
        <div>
            <ul className="list">
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={add}>Добавить число </button>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
        </div>
    );
}
export default Ref3;
