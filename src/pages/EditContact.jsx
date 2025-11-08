import React, { useState, useEffect } from "react";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { contact_id } = useParams();
    const AGENDA_SLUG = "lucas";

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

 
    useEffect(() => {
        const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id));
        if (contactToEdit) {
            setData({
                name: contactToEdit.name,
                email: contactToEdit.email,
                phone: contactToEdit.phone,
                address: contactToEdit.address
            });
        } else {
            alert("Usuario no encontrado");
        }
    }, [contact_id, store.contacts]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await fetch(
                `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts/${contact_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                }
            );

            if (!resp.ok) throw new Error("Error al actualizar el contacto");

            const updatedContact = await resp.json();

            dispatch({
                type: "update_contact",
                payload: updatedContact
            });

            navigate("/"); 
        } catch (error) {
            console.error("Error actualizando el contacto:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Editar Contacto</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        required
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        required
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.address}
                        onChange={(e) => setData({ ...data, address: e.target.value })}
                        required
                    />
                </div>

                <div className="col-12 d-flex gap-2">
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Volver</button>
                </div>
            </form>
        </div>
    );
};
