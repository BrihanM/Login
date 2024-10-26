import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Img1 from '../Imagenes/reservas/1.png'
import Img2 from '../Imagenes/reservas/2.png'
import Img3 from '../Imagenes/reservas/3.png'
import Img4 from '../Imagenes/reservas/4.png'
import Img5 from '../Imagenes/reservas/5.png'
import Img6 from '../Imagenes/reservas/6.png'
import Img7 from '../Imagenes/reservas/7.png'
import Img8 from '../Imagenes/reservas/8.png'
import '../CSS/Alquiler.css'
import Des1 from '../Pages/Descripcion/C1'
import Des2 from '../Pages/Descripcion/C2'
import Des3 from '../Pages/Descripcion/C3'
import Des4 from '../Pages/Descripcion/C4'
import Des5 from '../Pages/Descripcion/C5'
import Des6 from '../Pages/Descripcion/C6'
import Des7 from '../Pages/Descripcion/C7'
import Des8 from '../Pages/Descripcion/C8'

const Alquiler = () => {
    const [showModal, setShowModal] = useState(Array(8).fill(false));

    const handleOpenModal = (index) => {
        const newShowModal = [...showModal];
        newShowModal[index] = true;
        setShowModal(newShowModal);
    };

    const handleCloseModal = (index) => {
        const newShowModal = [...showModal];
        newShowModal[index] = false;
        setShowModal(newShowModal);
    };

    const renderCar = (img, name, price, description, index) => (
        <div className="col-md-3 col-sm-6">
            <div className="producto">
                <img src={img} alt={`Producto ${index + 1}`} />
                <p className="nombrecarro">{name}</p>
                <Button className="Info" onClick={() => handleOpenModal(index)}>
                    Info
                </Button>
                <Modal show={showModal[index]} onHide={() => handleCloseModal(index)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {description}
                    </Modal.Body>
                </Modal>
                <p className="precio">${price}</p>
            </div>
        </div>
    );

    return (
        <div className="fondo">
            <div className="caja">
            </div>

            <div className="Productos">
                <div className="row">
                    {renderCar(Img1, "SUZUKI SWIFT", 1000, <Des1 />, 0)}
                    {renderCar(Img2, "ONIX TURBO", 2000, <Des2 />, 1)}
                    {renderCar(Img3, "MAZDA 3", 3000, <Des3 />, 2)}
                    {renderCar(Img4, "MERCEDES A200", 4000, <Des4 />, 3)}
                </div>
                <div className="row">
                    {renderCar(Img5, "TOYOTA PRADO XL", 5000, <Des5 />, 4)}
                    {renderCar(Img6, "RANGE ROVERS", 6000, <Des6 />, 5)}
                    {renderCar(Img7, "LOGAN FAMILY", 7000, <Des7 />, 6)}
                    {renderCar(Img8, "CORVETTE", 8000, <Des8 />, 7)}
                </div>
            </div>
        </div>
    )
}

export default Alquiler