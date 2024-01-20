import { Link } from "react-router-dom";
import './styles/Admin.css'

const HomeAdmin = () => {
    return (
        <div>
            <h1>Administração</h1>
            <Link to={'/admin/gerenciar-times'} className='btn-sorteio'>Definir times</Link>
            <Link to={'/admin/campeonato'} className='btn-sorteio'>Campeonato</Link>
        </div>
    )
}

export default HomeAdmin;