import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Usuarios() {

    const [usuario, setUsuario] = useState([])
    const obtenerusuarios = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = await result.data
        setUsuario(data)
    }
    useEffect(() => {
        obtenerusuarios()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Lista de usuarios</h1>
                    <p>
                        {
                            usuario.map((item) => (
                                <span class="border border-succes">
                                    <b><Link className="text-bold" to={`/datos/${item.id}`}>{item.name}</Link></b>
                                </span>
                            ))
                        }
                    </p>

                </div>
            </div>
        </div>

    )
}

export default Usuarios
