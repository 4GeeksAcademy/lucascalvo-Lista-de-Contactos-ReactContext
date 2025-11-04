import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactCard = (props) => {


    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()



    return (
        <div>

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.informacion.name}</h5>
                    <p className="card-text">{props.informacion.phone}</p>

                    <Link to={'/edit-contact/' + props.informacion.id}>
                        <button className="btn btn-primary">Go somewhere</button>
                    </Link>

                </div>
            </div>


        </div>
    )
}