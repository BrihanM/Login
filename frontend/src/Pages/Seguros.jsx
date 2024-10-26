import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../CSS/Seguros.module.css';

const Seguros = () => {
    const [seguros, setSeguros] = useState([]);
  
    useEffect(() => {
      const fetchSeguros = async () => {
        try {
          const response = await axios.get('http://localhost:8085/api/seguros');
          setSeguros(response.data);
        } catch (error) {
          console.error('Error fetching seguros:', error);
        }
      };
  
      fetchSeguros();
    }, []);

return (
    <div className={styles.segurosPage}>
      <h1 className={styles.segurosTitle}>Seguros</h1>
      <nav className={styles.segurosNav}>
        <Link to="/vehiculos" className={styles.segurosNavLink}>Vehículos</Link> | 
        <Link to="/users-admin" className={styles.segurosNavLink}>Usuarios Admin</Link>
      </nav>
      <table className={styles.segurosTable}>
        <thead className={styles.segurosTableHeader}>
          <tr>
            <th>ID</th>
            <th>Nombre del Seguro</th>
            <th>Precio Diario</th>
          </tr>
        </thead>
        <tbody className={styles.segurosTableBody}>
          {seguros.map((seguro) => (
            <tr key={seguro.Id_Seguro}>
              <td>{seguro.Id_Seguro}</td>
              <td>{seguro.Nombre_Seguro}</td>
              <td>{seguro.Precio_Diario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Seguros;