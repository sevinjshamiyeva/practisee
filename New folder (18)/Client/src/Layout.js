import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artist">Artist</Link>
          </li>
          <li>
            <Link to="/addArtist">Add Artist</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
