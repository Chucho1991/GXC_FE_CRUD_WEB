import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import services from '../services';
import LibroItem from '../components/LibroItem';

const HomeScreen = () => {
  const [libros, setLibros] = useState(null);

  const fetchLibros = async () => {
    try {
      const resp = await services.getAllLibros();
      setLibros(resp.data)
    }catch (error) {
      alert('Error al Buscar Libros.');
      console.log(error);   
    }
  }

  useEffect(() => {
    fetchLibros();
  }, []);

  if(!libros) {
    return (
      <Container>
        <Col>
          <p>Cargando Libros...</p>
        </Col>
      </Container>
    )
  }

  return (
    <Container style={{ padding : 16 }}>
      <Row>
        {libros.reverse().slice(0, 50).map(libroItem => (
          <LibroItem
            key={libroItem.id}
            id={libroItem.id}            
            nombre_libro={libroItem.nombreLibro}
          />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;