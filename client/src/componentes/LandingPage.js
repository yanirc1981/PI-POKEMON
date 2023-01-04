import React from "react";
import { Link } from "react-router-dom";
import "./estil/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className ="centrar-image" >
        <img
          className="img"
          src="https://th.bing.com/th/id/R.82a5525da38ec9fd432d675263207374?rik=skqc9Xozg8J%2fqQ&pid=ImgRaw&r=0" />
          <div>
         <Link to="/home">
          <button className="button"> INGRESAR </button>
        </Link>
      </div>
         <br></br>
          <img
          className="image"
          src="https://th.bing.com/th/id/R.dba3b8eda6c4dcc57fbc825279ae6866?rik=ACN1JcCm%2bT13Gw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784884jkxg4.png&ehk=CUoFNRf%2fvK6gK4mxFpiKQqxzaMhLGtdZeKVJ07sZ6xo%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
      
    </div>
  );
}
