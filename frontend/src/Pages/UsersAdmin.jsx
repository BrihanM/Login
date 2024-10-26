import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../CSS/UsersAdmin.module.css';

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/adminAccount');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.usersAdminPage}>
      <div className={styles.usersAdminContainer}>
        <h1 className={styles.usersAdminTitle}>Usuarios Administradores</h1>
        <nav className={styles.usersAdminNav}>
          <Link to="/vehiculos" className={styles.usersAdminNavLink}>Vehículos</Link> | 
          <Link to="/seguros" className={styles.usersAdminNavLink}>Seguros</Link>
        </nav>
        <table className={styles.usersAdminTable}>
          <thead className={styles.usersAdminTableHeader}>
            <tr>
              <th>Correo</th>
              <th>Primer Nombre</th>
              <th>Segundo Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
            </tr>
          </thead>
          <tbody className={styles.usersAdminTableBody}>
            {users.map((user) => (
              <tr key={user.Correo}>
                <td>{user.Correo}</td>
                <td>{user.P_Nombre}</td>
                <td>{user.S_Nombre}</td>
                <td>{user.P_Apellido}</td>
                <td>{user.S_Apellido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersAdmin;