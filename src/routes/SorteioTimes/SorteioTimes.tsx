import './styles/SorteioTimes.css'
import { Link } from 'react-router-dom';

const SorteioTimes = () => {
    return(
        <div>
            <h1>Categorias</h1>
            <div className='sorteio'>
                <div className='categoria'>
                    <div className="categoria-posicoes">
                        Capitães: <br />
                        [Aqui, deve aparecer cada capitão selecionado]
                    </div>
                    <div className="categoria-posicoes">
                        Levantadores: <br />
                        [Aqui, deve aparecer cada levantador selecionado]
                    </div>
                    <div className="categoria-posicoes">
                        Liberos: <br />
                        [Aqui, deve aparecer cada líbero selecionado]
                    </div>
                    <div className="categoria-posicoes">
                        Pontas: <br />
                        [Aqui, deve aparecer cada ponta selecionado]
                    </div>
                </div>
                <div className="times">
                    Time 1: <br/>
                    Capitão <br/>
                    Levantador <br/>
                    Ponta <br/>
                    [Para cada time formado, deve-se inserir os nomes nessa ordem]
                </div>
            </div>
            <div className='btn'>
                <Link to={''} className='btn-sorteio'>Histórico do dia</Link>
                <Link to={'/'} className='btn-sorteio'>Voltar</Link>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            [Essa página será incrementada pelo portal dos adms, haverá uma página
            que permitirá que os adms modifiquem as categorias e com base no sorteio,
            os times serão exibidos depois.]<br/>
            [Aqui, precisaremos fazer uma consulta pra cada uma das informações reservadas no app,
            uma consulta para o capitães, outra pra levantadores, outra pra líberos, outra pra pontas
            (ou uma que tragam todos). Além disso, após o sorteio, precisaremos guardar em uma variável
            para renderizar todos os times.]
        </div>
    )
}

export default SorteioTimes;