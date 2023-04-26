import React from "react";
import { Link } from "react-router-dom";
import "./estil/NavBar.css";
import SearchBar from "../componentes/SearchBar.js";

export default function NavBar() {
  return (
   
      <header id="navegador" className="header">
        <Link to="/"></Link>
        <div className="nav-buttons">
          <Link to="/post" >
            <button className="button" style={{ flex: 1 }}>
              Crear Pókemon
            </button> 
          </Link>
          <SearchBar />
        </div>
      </header>
  
  );
}