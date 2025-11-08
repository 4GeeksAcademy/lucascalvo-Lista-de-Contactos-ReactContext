
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard.jsx";

export const Agenda = () => {
  const { store, dispatch } = useGlobalReducer();
  const slug = "lucas"; 


  const crearAgenda = async () => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}) 
      });

      if (resp.ok) {
        console.log("Crea la agenda");
      } else {
        console.log("La agenda ya existe o no se pudo crear");
      }
    } catch (error) {
      console.log("Error al crear agenda:", error);
    }
  };

  
  const obtenerContactos = async () => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
      const data = await resp.json();

      dispatch({
        type: "get_contact",
        payload: data.contacts || [],
      });
    } catch (error) {
      console.log("No se trajeron los contactos de la agenda:", error);
    }
  };

  const eliminarContacto = async (id) => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        dispatch({
          type: "delete_contact",
          payload: id,
        });
        console.log("Contacto eliminado");
        obtenerContactos();
      } else {
        console.log("No se elimino el contacto");
      }
    } catch (error) {
      console.log("Error al eliminar contacto:", error);
    }
  };

  
  useEffect(() => {
    crearAgenda(); 
    obtenerContactos();
  }, []);

 
  const contactos = store.contacts || [];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Agenda de Contactos</h1>
        <Link to="/add-contact" className="btn btn-success">
          Agregar Contacto
        </Link>
      </div>

      {contactos.length > 0 ? (
        contactos.map((contacto) => (
          <ContactCard
            key={contacto.id}
            contacto={contacto}
            eliminarContacto={eliminarContacto}
          />
        ))
      ) : (
        <p>No hay contactos aún.</p>
      )}
    </div>
  );
};
