import React from 'react'

export default function cards(props) {
    const { imagen, titulo, texto } = props
    console.log(props);
    return (
        <div className="container">
            <div className="row row-cols-2">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imagen} className="card-img-top img-thumbnail" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="crard-text">{texto}</p>
                            <a href="#" className="btn btn-info">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imagen} className="card-img-top img-thumbnail" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="crard-text">{texto}</p>
                            <a href="#" className="btn btn-info">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
