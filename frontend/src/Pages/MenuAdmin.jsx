import React, { useState } from 'react';
import '../CSS/MenuAdmin.css';

const MenuAdmin = () => {
  const [newCar, setNewCar] = useState({
    marca: '',
    modelo: '',
    año: '',
    precio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({...newCar, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para agregar el carro a la base de datos
    console.log('Nuevo carro:', newCar);
    // Resetear el formulario
    setNewCar({marca: '', modelo: '', año: '', precio: ''});
  };

  return (
    <div className="menu-admin-page">
      <div className="menu-admin-container">
        <h1 className="menu-admin-title">Panel de Administración</h1>
        
        <section className="menu-admin-section">
          <h2 className="menu-admin-section-title">Agregar Nuevo Carro</h2>
          <form className="menu-admin-add-car-form" onSubmit={handleSubmit}>
            <div className="menu-admin-form-group">
              <label htmlFor="marca">Marca:</label>
              <input 
                type="text" 
                id="marca" 
                name="marca" 
                value={newCar.marca} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="menu-admin-form-group">
              <label htmlFor="modelo">Modelo:</label>
              <input 
                type="text" 
                id="modelo" 
                name="modelo" 
                value={newCar.modelo} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="menu-admin-form-group">
              <label htmlFor="año">Año:</label>
              <input 
                type="number" 
                id="año" 
                name="año" 
                value={newCar.año} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="menu-admin-form-group">
              <label htmlFor="precio">Precio por día:</label>
              <input 
                type="number" 
                id="precio" 
                name="precio" 
                value={newCar.precio} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <button type="submit" className="menu-admin-submit-button">Agregar Carro</button>
          </form>
        </section>

        <section className="menu-admin-section">
          <h2 className="menu-admin-section-title">Carros Rentados</h2>
          <ul className="menu-admin-car-list">

            {/* Aquí iría la lista de carros rentados */}
            <li className="menu-admin-car-item">
              
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MenuAdmin;