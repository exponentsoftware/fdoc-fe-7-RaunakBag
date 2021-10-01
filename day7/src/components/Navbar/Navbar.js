import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/add">Add Album</Link>
      <Link to="/album">Albums</Link>
      {/* <Link to="/playlist">Playlist</Link> */}
    </div>
  );
}

export default Navbar;
