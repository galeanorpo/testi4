import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

export default function Cobtainer() {
  const columns = [
    {
      name: 'ID Cliente',
      selector: 'id_cliente',
      sortable: true,
    },
    {
      name: 'Identificación Cliente',
      selector: 'identificacion_cliente',
      sortable: true,
    },
    {
      name: 'Modelo Automóvil',
      selector: 'modelo_carro',
      sortable: true,
    },
    {
      name: 'Factores',
      selector: 'factores_carro',
      sortable: true,
      cell: (row) => <div className="custom-column">{row.factores_carro}</div>,
    },
    {
      name: 'Calificacion manejo',
      selector: 'calificacion_manejo',
      sortable: true,
    },
    {
      name: 'Calificacion satisfaccion',
      selector: 'calificacion_satisfaccion',
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div>
          <Link to={`/editEncuesta/${row.id_cliente}`} type="button" class="btn btn-success">
            Edit
          </Link>
          <button
            type="button"
            class="btn btn-danger ml-2"
            onClick={() => handleDelete(row.id_cliente)}
          >
            X
          </button>
        </div>
      ),
    },
  ]

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3333/encuestas/listar')
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDelete = async (id_cliente) => {
    try {
      await axios.delete(`http://localhost:3333/encuestas/${id_cliente}`)
      console.log('Encuesta deleted')
      // Actualizar la lista de encuestas después de eliminar
      fetchData()
    } catch (error) {
      console.error('Error deleting encuesta:', error)
    }
  }

  return (
    <div class="container mt-5">
      <hr />
      <DataTable title="Lista de Clientes" columns={columns} data={data} pagination />
      <hr />
      <Link to="/formEncuesta" type="button" class="btn btn-dark">
        Agregar una encuesta
      </Link>
    </div>
  )
}
