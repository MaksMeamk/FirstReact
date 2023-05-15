import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./Components/Page";

function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="one" element={<PageOne />} />
        <Route path="two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App2;
