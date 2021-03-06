import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import services from '../services';

const EditView = ({match: { params }}) => {
    const history = useHistory();
    const id = params.id;
    const [nombreLibro, setNombreLibro] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [autor, setAutor] = useState('');
    const [fechaPublicacion, setFechaPublicacion] = useState('');
    const [numeroEjemplares, setNumeroEjemplares] = useState('');
    const [costo, setCosto] = useState('');
  
    const loadLibro = async () => {
      try {
        const resp = await services.editLibro(id);
        const libro = resp.data;      

        console.log(libro);

        setNombreLibro(libro.nombreLibro);
        setDescripcion(libro.descripcion);
        setAutor(libro.autor);
        setFechaPublicacion(new Date(libro.fechaPublicacion));
        setNumeroEjemplares(libro.numeroEjemplares);
        setCosto(libro.costo);
      }catch(error) {
        alert('error al recibir el Libro.')
      }
    }
  
    useEffect(() => {
        loadLibro();
    }, []);
  
    const handleSumbit = async () => {
        try {
            if(!nombreLibro|| !descripcion|| !autor|| !fechaPublicacion|| !numeroEjemplares|| !costo) {
                alert('Toda la información es necesaria');
                return;
            }
            const libro = {id : Number(id),nombreLibro, descripcion, autor, fechaPublicacion, numeroEjemplares : Number(numeroEjemplares), costo : Number(costo)};
        
            const resp = await services.updateLibro(libro);
            
            console.log(resp)
            alert('Libro editado Correctamente!');
            history.replace('/');
        }catch(error) {
            console.log(error);
            console.log(error.response);
            alert('No se puede editar nuevo libro!');
        }
    }  

    if(!nombreLibro) {
        return (
          <Container>
            <Col>
              <p>Cargando Libros...</p>
            </Col>
          </Container>
        )
    }

    const fechaIni = new Date(2010,1,1,0,0,0);

    return (
        <Container style={{ padding: 16 }}>
        <Row>
            <Col>
            <Form>
                <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del Libro ..."
                    onChange={e => setNombreLibro(e.target.value)}
                    value={nombreLibro}
                    required={true}
                />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                    as="textarea"
                    placeholder="Ingrese la descripcion del Libro ..."
                    onChange={e => setDescripcion(e.target.value)}
                    value={descripcion} 
                    required={true}
                    rows={3} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el autor del Libro ..."
                        onChange={e => setAutor(e.target.value)}
                        value={autor}
                        required={true}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fecha Publicación</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Ingrese la fecha de publicacion del Libro ..."
                        onChange={e => setFechaPublicacion(e.target.value)}
                        value={fechaPublicacion}
                        required={true}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Número de Ejemplares</Form.Label>
                    <Form.Control
                        type="number"
                        pattern="[0-9]*"
                        placeholder="Ingrese el número de ejemplares del Libro ..."
                        onChange={e => setNumeroEjemplares(e.target.value)}
                        value={numeroEjemplares}
                        required={true}
                        min="0"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Costo</Form.Label>
                    <Form.Control
                        type="number"
                        step="any"
                        placeholder="Ingrese el costo del Libro ..."
                        onChange={e => setCosto(e.target.value)}
                        value={costo}
                        required={true}
                    />
                </Form.Group>

                <Form.Group>
                <Button
                    variant="primary"
                    onClick={handleSumbit}
                >
                    Actualizar Libro
                </Button>
                </Form.Group>
            </Form>
            </Col>
        </Row>
        </Container>
    );
};

export default EditView;