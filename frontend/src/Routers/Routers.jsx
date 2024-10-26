import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Contactanos.jsx';
import Home from '../Pages/Principal.jsx';
import Alquiler from '../Pages/Alquiler.jsx';
import Reservas from '../Pages/Reservas.jsx'
import MenuAdmin from '../Pages/MenuAdmin.jsx'
import Contactanos from '..//Pages/Contactanos';
import Perfil from '../Pages/Perfil.jsx';
import Vehiculos from '../Pages/Vehiculos.jsx';
import Seguros from '../Pages/Seguros.jsx';
import UsersAdmin from '../Pages/UsersAdmin.jsx';

const Routers = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alquiler" element={<Alquiler />} /> 
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/admin' element={<MenuAdmin />} />
          <Route path="/contactanos" element={<Contactanos />}/>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/users-admin" element={<UsersAdmin />} />
    </Routes>
  );
};

export default Routers;
