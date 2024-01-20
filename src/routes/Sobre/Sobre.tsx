import React from "react";
import "./styles/Sobre.css"

const Sobre = () => {
    return(
        <div className="titulo">
            <h1>Sobre o grupo</h1>
            <div className="sobre">
                <div className="sobre-texto">
                    <p>[Descrição detalhada do grupo]</p>
                </div>
                <div className="sobre-horario">
                    <p>[Horário dos jogos]</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sobre;