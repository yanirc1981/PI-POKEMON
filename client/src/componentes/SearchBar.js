import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../redux/actions/actions";
import "./estil/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPoke(name));
  };

  return (
    <>
      <input
        className="search"
        type="text"
        onChange={(e) => handleInputChange(e)}
        placeholder= "Buscar pokemon..."
      />
      <button className="boton" type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
      </>
  );
}