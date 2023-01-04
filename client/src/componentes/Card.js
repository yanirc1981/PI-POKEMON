import React from "react";
import "./estil/card.css";
import { Link } from "react-router-dom";


export default function CardPokemon({ name, types, image, id}) {
  return (
    <Link className="cards" to={`/detail/${id}`}>
   
      <div className="card">
        <h3 className="name">
         
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <img
          src={image}
          alt="imagen"
          
          width="300px"
          height="300px"
        />
        <h4>
          Types: {
          
            types.map(type => type).join(' - ')
          }
        </h4>
      </div>
    
    
    </Link>
    
  );
}

