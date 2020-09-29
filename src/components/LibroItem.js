import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';
import services from '../services';

// const LibroItem = ({ id, nombre_libro, descripcion, autor, fecha_publicacion, numero_ejemplares, costo }) => {  
const LibroItem = ({ id, nombre_libro }) => {  

  const borrarLibro = async () => {
    try {
      await services.deleteLibro(id);
      alert('Libro Eliminado!')
      window.location.reload()
    }catch(error) {
      console.log(error)
      alert('Eliminar Libro Falló!')
    }
  }

  return (
    <Col md="auto" style={{ marginTop: 16 }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{nombre_libro}</Card.Title>
          <Link to={`/edit/${id}`}>
            <Button variant="primary">Editar Libro</Button>
          </Link>
          <Button onClick={borrarLibro} variant="danger" style={{ marginLeft: 16 }}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LibroItem;