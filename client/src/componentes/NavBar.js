import React from "react";
import { Link } from "react-router-dom";
import "./estil/NavBar.css";

export default function NavBar() {
  return (
    <header id="navegador" className="header">
      <Link to="/"></Link>
      <div>
        <Link to="/post" className="created">
        <button className="button" onClick>Crear Pókemon</button> 
        </Link>
      </div>
    </header>
  );
}