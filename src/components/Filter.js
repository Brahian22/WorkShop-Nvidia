/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Image } from "react-bootstrap";

const Filter = () => {
  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [buscar, setBuscar] = useState([]);

  const peticionGet = async () => {
    await axios
      .get("https://6243a5813da3ac772b04e2cd.mockapi.io/sessions")
      .then((response) => {
        setProductos(response.data);
        setTablaProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBuscar(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (
        elemento.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <div className="filtro-checkbox">
        <div className="containerInput">
          <input
            className="input-buscar"
            value={buscar}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={handleChange}
          />
          <button className="btn-buscar">Buscar</button>
        </div>
        <div>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Drescripcion</th>
            </tr>
          </thead>

          <tbody>
            {productos &&
              productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.title}</td>
                  <td>{producto.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Filter;
