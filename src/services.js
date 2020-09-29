import axios from 'axios';

const BASE_BACKEND_URL = 'http://localhost/LibrosAPI/api';

export default {
  getAllLibros: () => 
    axios.get(`${BASE_BACKEND_URL}/Libros/`),
  addLibro: (libro) => 
    axios.post(`${BASE_BACKEND_URL}/Libros/`, libro),
  editLibro: (libroId) =>
    axios.get(`${BASE_BACKEND_URL}/Libros/${libroId}`),
  updateLibro: (libro) =>
    axios.put(`${BASE_BACKEND_URL}/Libros/${libro.id}`, libro),
  deleteLibro: (libroId) =>
    axios.delete(`${BASE_BACKEND_URL}/Libros/${libroId}`),
}