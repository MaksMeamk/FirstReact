import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./Pages";
import MainPage from "./MainPage";
import Events from "./Events";
import Clock from "./Clock";
import List from "./List";
import { useState } from "react";
import Ref from "./Ref";
import Ref2 from "./Ref2";
// import tick from "./tick";

const App2 = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };
  const ulElem = document.querySelector('ul');

  return (
    <>
      {/* {setInterval(tick, 1000)} */}
      <Clock />
      <Events />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />}>
            <Route index element={<div>No page is selected.</div>} />
            <Route path="one" element={<PageOne />} />
            <Route path="two" element={<PageTwo />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {visible && <List></List>}
      <button onClick={toggleVisible}>Показать/Скрыть</button>
      <Ref></Ref>
      <Ref2 />
    </>
  );
};

export default App2;
