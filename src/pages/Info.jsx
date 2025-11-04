import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom" //1 IMPORTACION 
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Info = () => {
    const navigate = useNavigate() //2 activarlo
    const { store, dispatch } = useGlobalReducer()

    let [message, setMessage]= useState("")

    return (
        <div>
            <h1>Hola soy la vista de informacion</h1>


          

            <input type="text" placeholder='ingresar saludo ' onChange={(e)=> {setMessage(e.target.value)}}/>

            <h3>{store.saludo}</h3>


            <button className="btn btn-success"
                onClick={() => dispatch({
                    type: "change_saludo",
                    payload: {message: message}
                })}>
                cambiar saludo
            </button>



            <button className="btn btn-danger" onClick={() => {
                console.log("volver al home");
                navigate("/")

            }}>Ir a home</button>

        </div>
    )
}