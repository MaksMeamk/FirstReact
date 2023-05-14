import React, { useState } from "react";

function StateFunc() {
    const [count, setCount] = useState(0);
    let tap = () => { setCount(() => count + 1) }
    return (
        <>
            <p> Count clicks {count}</p>
            <button onClick={() => tap()}>Click</button>
        </>

    )
}

export default StateFunc