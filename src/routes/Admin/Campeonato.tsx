import { Link } from "react-router-dom";

const Campeonato = () => {
    return (
        <div>
            [definir jogos será um local onde inseriremos os times sorteados na hora]<br/>
            <Link to={'/admin/definir-times-campeonato'} className="btn-padrao">Definir Times</Link><br/>
            [Os jogos serão definidos a partir da quantidade de times implementar a lógica básica aqui]<br/>
            <Link to={'/admin/definir-jogos-campeonato'} className="btn-padrao">Definir Jogos</Link><br/>

        </div>
    )
}

export default Campeonato;