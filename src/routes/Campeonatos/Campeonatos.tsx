import './styles/Campeonatos.css'
import { Link } from 'react-router-dom';

const Campeonatos = () => {
    return (
        <div>
            <h1>Área de campeonatos</h1>
            <h2>Campeonato Atual: 4°</h2>
            [Texto motivacional ou épico pra caçar conversa]
            <div>
                <div className='btn'>
                    <Link to={'/campeonato/times'} className='btn-sorteio'>Times</Link>
                    <Link to={'/campeonato/jogos'} className='btn-sorteio'>Lista de Jogos</Link>
                    <Link to={'/campeonato/classificacao'} className='btn-sorteio'>Classificação</Link>
                    <Link to={'/'} className='btn-sorteio'>Voltar</Link>
                </div>
            </div>
            [A explicação de cada um deles deve ser implementado está dentro de cada link]
        </div>
    )
}

export default Campeonatos;