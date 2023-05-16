import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("My path:", location.pathname);
  }, [location]);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Page Main</Link>
          </li>
          <li>
            <button onClick={() => navigate("one")}>Page One</button>
          </li>
          <li>
            <button onClick={() => navigate("two")}>Page Two</button>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
export default MainPage;
