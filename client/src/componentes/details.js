import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




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
    <div>
      <div>
        <Link to="/home"> Volver </Link>
      </div>
      <div>
        <div>
          <h1>{details.name}</h1>
          <h2>{details.id}</h2>
        </div>
      </div>
      <div>
        <img
          className="imagen"
          src={details.image}
          alt=""
          width="250px"
          height="250px"
        />
      </div>
      <p>types: {details.types?.map(t => t)}</p>

      <div>
        <p>
          Vida: {details.life} Ps - Fuerza: {details.attack} % - Defensa:
          {details.defense} % - Velocidad: {details.speed} % - Altura:
          {details.height} Mt - Peso: {details.weight} Kg
        </p>
      </div>
    </div>
  );
}
