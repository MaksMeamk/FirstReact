import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./Pages";
import MainPage from "./MainPage";
import Events from "./Events";
import Clock from "./Clock";
// import tick from "./tick";

const App2 = () => {
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
    </>
  );
};

export default App2;
