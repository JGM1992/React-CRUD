import React from 'react'

export default function Bienvenida(props) {
    const { name } = props
    return (
        <div className="container">
            <h1>Uso de props.</h1>
            <hr></hr>
            <div clasName="row">
                <div className="col">
                    <p>Hola {name}</p>
                </div>
            </div>
        </div>
    )
}
