/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Form, Image } from "react-bootstrap";

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
        elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.industry_segment.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.primary_topic.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.session_type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.lenguage.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
        <div>
          <p>Filters</p>
          <p>Clear</p>
        </div>

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
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Industry Segment</Accordion.Header>
              <Accordion.Body>
                  {productos && productos.map((producto) => (
                      <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${producto.id}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={producto.industry_segment}
                          />
                        </div>
                      ))}
                    </Form>
                  ))}                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Topic</Accordion.Header>
              <Accordion.Body>
              {productos && productos.map((producto) => (
                      <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${producto.id}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={producto.primary_topic}
                          />
                        </div>
                      ))}
                    </Form>
                  ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Other Collections</Accordion.Header>
              <Accordion.Body>
                  {productos && productos.map((producto) => (
                      <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${producto.id}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={producto.lenguage}
                          />
                        </div>
                      ))}
                    </Form>
                  ))}                
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Session Type</Accordion.Header>
              <Accordion.Body>
                  {productos && productos.map((producto, index) => (
                      <Form>
                      {["checkbox"].map((type) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={producto.session_type}
                          />
                        </div>
                      ))}
                    </Form>
                  ))}                
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Industry Segment</Accordion.Header>
              <Accordion.Body>
                  {
                    this.state.productos.map((producto, index) => (
                      <div producto={producto} key={producto.id} className="mb-3">
                      <label>
                      <input type="checkbox" />
                      {producto.session_type}
                    </label>
                    </div>
                  ))}                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </div>
    </div>
  );
};

export default Filter;
