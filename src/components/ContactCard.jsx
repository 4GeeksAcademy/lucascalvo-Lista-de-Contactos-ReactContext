import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contacto, onDelete }) => (
  <div className="card mb-3" style={{ maxWidth: "540px" }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Profile" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{contacto.name}</h5>
          <p className="card-text">Tel: {contacto.phone}</p>
          <p className="card-text">Dirección: {contacto.address}</p>
          <p className="card-text">Email: {contacto.email}</p>

          <Link to={`/edit-contact/${contacto.id}`}>
            <button className="btn btn-primary me-2">Editar</button>
          </Link>
          <button className="btn btn-danger" onClick={() => onDelete(contacto.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  </div>
);
