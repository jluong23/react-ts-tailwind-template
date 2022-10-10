import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="bg-primary p-2">
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
    </ul>
  );
}

export default Navbar;
