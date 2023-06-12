import React, { useState } from "react";
import Count from "./Count";
import IsFive from "./IsFive";

function Memo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div className="Memo">
            <h5>Счётчк 1:</h5>
            <div className="counter">
                <button onClick={() => { setCount1((count1) => count1 + 1) }}>+</button>
                <Count id={1} value={count1}></Count>

            </div>
            <div className="counter">
                <h5>Счётчк 2:</h5>
                <button onClick={() => { setCount2((count2) => count2 + 1) }}>+</button>
                <Count id={2} value={count2}></Count>
                <IsFive value={count2} />

            </div>


        </div>
    )

}

export default Memo;