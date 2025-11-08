import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Info = () => {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const [message, setMessage] = useState("");

    return (
        <div className="container mt-4">
            <h1>Hola, soy la vista de información</h1>

            <input
                type="text"
                placeholder="Ingresar saludo"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control mb-3"
            />

            <h3>{store.saludo}</h3>

            <button
                className="btn btn-success me-2"
                onClick={() =>
                    dispatch({
                        type: "change_saludo",
                        payload: message // enviamos directamente el string
                    })
                }
            >
                Cambiar saludo
            </button>

            <button
                className="btn btn-danger"
                onClick={() => navigate("/")}
            >
                Ir a home
            </button>
        </div>
    );
};
