import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../CSS/Vehiculos.module.css';

const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/vehiculo');
        setVehiculos(response.data);
      } catch (error) {
        console.error('Error fetching vehiculos:', error);
      }
    };

    fetchVehiculos();
  }, []);

  return (
    <div className={styles.vehiculosPage}>
      <div className={styles.vehiculosContainer}>
        <h1 className={styles.vehiculosTitle}>Vehículos</h1>
        <nav className={styles.vehiculosNav}>
          <Link to="/seguros" className={styles.vehiculosNavLink}>Seguros</Link> | 
          <Link to="/users-admin" className={styles.vehiculosNavLink}>Usuarios Admin</Link>
        </nav>
        <table className={styles.vehiculosTable}>
          <thead className={styles.vehiculosTableHeader}>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Precio</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Línea</th>
              <th>Combustible</th>
              <th>Color</th>
              <th>Observaciones</th>
              <th>Disponibilidad</th>
            </tr>
          </thead>
          <tbody className={styles.vehiculosTableBody}>
            {vehiculos.map((vehiculo) => (
              <tr key={vehiculo.Id_Vehiculo}>
                <td>{vehiculo.Id_Vehiculo}</td>
                <td>{vehiculo.Placa}</td>
                <td>{vehiculo.Precio}</td>
                <td>{vehiculo.Marca}</td>
                <td>{vehiculo.Modelo}</td>
                <td>{vehiculo.Linea}</td>
                <td>{vehiculo.T_Combustible}</td>
                <td>{vehiculo.Color}</td>
                <td>{vehiculo.Observaciones}</td>
                <td>{vehiculo.Disponibilidad ? 'Sí' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehiculos;