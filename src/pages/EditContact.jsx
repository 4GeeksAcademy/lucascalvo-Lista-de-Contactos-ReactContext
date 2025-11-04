import React, { useState, useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom"

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()

    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    })

    const navigate = useNavigate()
    const { contact_id } = useParams()

    //buscar el contacto directamente en el store 
    useEffect(() => {
        const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id))
        if (contactToEdit) {
            setData({
                name: contactToEdit.name,
                email: contactToEdit.email,
                phone: contactToEdit.phone,
                address: contactToEdit.address
            })
        } else {
            alert("usuario no encontrado")
        }
    }, [contact_id, store.contacts])


    return (
        <div className='container'>
            <h2>Edit  Contact</h2>
            <h2>Edit Contact ID: {contact_id} </h2>

            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.name} 
                        onChange={(e) => setData({ ...data, name: e.target.value })} 
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={data.email} 
                        onChange={(e) => setData({ ...data, email: e.target.value })} 
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.phone} 
                        onChange={(e) => setData({ ...data, phone: e.target.value })} 
                    />
                </div>

                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={data.address} 
                        onChange={(e) => setData({ ...data, address: e.target.value })} 
                    />
                </div>

                <div className="col-12">
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => navigate("/")}
                    >
                        Volver
                    </button>
                </div>
            </form>
        </div>
    )
}
