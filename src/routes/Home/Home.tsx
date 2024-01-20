import React from "react";
import './styles/Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>[Frase de efeito do grupo]</h1>
            <div className="apresentacao">
                <div className="visao">
                    <h2>[Subtitulo]</h2>
                    <p>[Texto corrido sobre o grupo (chamativo)]</p>
                </div>
                <img className="logo-grupo" src="logo-principal" alt="Logo Grupo"/>
            </div>
            <div className="btn">
                <Link to={'/sorteio-times'} className='btn-padrao'>Sorteio de Times</Link>
                <Link to={'/campeonato'} className='btn-padrao'>Área de Campeonatos</Link>
            </div>
        </div>
    )
}

export default Home;