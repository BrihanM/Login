import React from 'react'
import '../CSS/Reservas.css'

const Reservas = () => {
    return (
        <div className="reservas-page">
            <div className="container">
                <h1 className="h1-tittle">Mis Reservas</h1>
                <div className="table-container">
                    <table id="reservas-table">
                        <thead>
                            <tr>
                                <th>ID Reserva</th>
                                <th>Auto</th>
                                <th>Fecha de Inicio</th>
                                <th>Fecha de Fin</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="edit-btn">Editar</button>
                                    <button className="cancel-btn">Cancelar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reservas