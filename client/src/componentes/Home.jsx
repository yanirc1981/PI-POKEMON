import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPokemons} from '../actions';
import {Link} from 'react-router-dom';
import Card from "./card";

export default function Home(){
    const dispatch = useDispatch()
    const allPokemons = useSelector((state)=>state.pokemons)

    useEffect(()=>{
        dispatch(getAllPokemons())
    },[dispatch])

    function handleClick(event){
        event.preventDefault();
        dispatch(getAllPokemons())
    }
    return(
        <div>
            <Link to='/pokemons'>CREAR POKEMON</Link>
            <h1>POKES</h1>
            <button></button>
        </div>
    )
    }