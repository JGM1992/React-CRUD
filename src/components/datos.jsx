import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Datos = () => {

    const [datos, setDatos] = useState([])
    const { id } = useParams()
    console.log(id)
    const obtenerDatos = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await result.data
        setDatos(data)
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Nombre: {datos.name}</li>
                        <li className="list-group-item">Correo Electrónico: {datos.email}</li>
                        <li className="list-group-item">Nombre de usuario: {datos.username}</li>
                        <li className="list-group-item">Telefono: {datos.phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Datos
