import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

export default function FormEncuesta() {
  const [data, setData] = useState({
    identificacion_cliente: '',
    modelo_carro: '',
    factores_carro: '',
    calificacion_manejo: '',
    calificacion_satisfaccion: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3333/encuestas/registros', data)
      console.log('Registro creado:', response.data)
      setData({
        identificacion_cliente: '',
        modelo_carro: '',
        factores_carro: '',
        calificacion_manejo: '',
        calificacion_satisfaccion: '',
      });
    } catch (error) {
      console.error('Error al crear el registro:', error)
    }
  }

  return (
    <div class="container mt-5">
      <h1>Datos Encuesta</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="idCliente" class="form-label">
            Identificacion del cliente
          </label>
          <input
            type="text"
            class="form-control"
            id="identificacion_cliente"
            name="identificacion_cliente"
            value={data.identificacion_cliente}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="modeloCarro" class="form-label">
            Modelo del automovil
          </label>
          <input
            type="text"
            class="form-control"
            id="modelo_carro"
            name="modelo_carro"
            value={data.modelo_carro}
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="factores" class="form-label">
            Factores que tuvo en cuenta a comprar el carro
          </label>
          <select
            class="form-select"
            id="factores_carro"
            name="factores_carro"
            value={data.factores_carro}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option value="La reputación de la marca">La reputación de la marca</option>
            <option value="Las opciones de financiamiento">Las opciones de financiamiento</option>
            <option value="El desempeño al manejarlo">El desempeño al manejarlo</option>
            <option value="Recomendaciones de amigos o familiares">
              Recomendaciones de amigos o familiares
            </option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="caliManejo" class="form-label">
            Calificación de prueba de manejo
          </label>
          <select
            class="form-select"
            id="calificacion_manejo"
            name="calificacion_manejo"
            value={data.calificacion_manejo}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="caliSatis" class="form-label">
            Calificación de satisfacción
          </label>
          <select
            class="form-select"
            id="calificacion_satisfaccion"
            name="calificacion_satisfaccion"
            value={data.calificacion_satisfaccion}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">
            Agregar Encuesta
          </button>
          <Link to="/" type="button" class="btn btn-dark mr-5">
            Volver al listado
          </Link>
        </div>
      </form>
    </div>
  )
}
