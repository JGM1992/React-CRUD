import React, { Fragment, useState } from 'react'
import Uniqid from "uniqid";

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const [lista, setLista] = useState([])
    const [edicion, setEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
    const [editado, setEditado] = useState('')

    const AgregaNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo nombre no puede estar vacio')
            return
        }
        const objNombre = {
            id: Uniqid(),
            name: nombre
        }
        setLista([...lista, objNombre])
        setNombre('')
    }

    const escribirNombre = (e) => {
        setNombre(e.target.value)
        setError(null)
    }

    const BorraNombre = (id) => {
        const nvoArray = lista.filter(x => x.id !== id)
        setLista(nvoArray)
    }

    const Editar = (item) => {
        setEdicion(true)
        setNombre(item.name)
        setId(item.id)
    }

    const EditarNombre = (e) => {
        e.preventDefault()
        setEditado(nombre)
        console.log(editado)

        const arrayEditar = lista.map(x => x.id === id ? { name: x.id, name: nombre } : x)
        setLista(arrayEditar)
        setEdicion(false)
        setError(null)
        setNombre('')

    }

    return (
        <div className="container">
            <div className="row row-cols-2">

                <div className="col">
                    <h2>Aplicación de CRUD basico</h2>
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            lista.map(item =>
                                <li key={item.id} className="list-group-item">{item.name}
                                    <button onClick={() => { BorraNombre(item.id) }} className="btn btn-danger float-right">BORRAR</button>
                                    <button onClick={() => { Editar(item) }} className="btn btn-info float-right">EDITAR</button>

                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={edicion ? EditarNombre : AgregaNombre} className="form-group">
                        <input type="text" placeholder="Introduce el nombre"
                            className="form-control mb-3" onChange={(e) => { escribirNombre(e) }}
                            value={nombre} />
                        <input type="submit" value={edicion ? "Actualizar" : "Registrar nombre"}
                            className="btn btn-info btn-block" />
                    </form>
                    {
                        error != null ? (
                            <span className="alert alert-danger">{error}</span>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
