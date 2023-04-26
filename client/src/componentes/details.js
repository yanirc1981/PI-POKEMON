import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './estil/detail.css'



export default function Detail() {

  const{id} = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
    return function clean(){
      dispatch(cleanDetail())
    }
  }, [dispatch, id]);

  let details = useSelector((state) => state.detail);
  console.log(details);
  if (!details) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    
    <div className="cards" >
       <Link to="/home"> 
       <button className="button">Volver</button> </Link>
      <div className="card">
       
     
      
          <h1 className="name">{details.name}</h1>
          <h2>{details.id}</h2>
      
      
        <img
          className="imagen"
          src={details.image}
          alt=""
          width="250px"
          height="250px"
        />
    
      <p className="type">types: {details.types?.map(t => t)}</p>

    
        <p className="type">
          Vida: {details.life} Ps - Fuerza: {details.attack} % - Defensa:
          {details.defense} % - Velocidad: {details.speed} % - Altura:
          {details.height} Mt - Peso: {details.weight} Kg
        </p>
        </div>
    </div>
  );
}
