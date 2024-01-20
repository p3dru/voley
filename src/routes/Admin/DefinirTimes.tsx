import React, {useEffect, useState} from "react";
import './styles/Admin.css'
import { Link } from "react-router-dom";

const DefinirTimes: React.FC = () => {
    const [capitaes, setCapitaes] = useState<string[]>([]);
    const [levantadores, setLevantadores] = useState<string[]>([]);
    const [liberos, setLiberos] = useState<string[]>([]);
    const [pontas, setPontas] = useState<string[]>([]);
    const [mostrarTimes, setMostrarTimes] = useState<boolean>(false);
    const [todosOsTimes, setTodosOsTimes] = useState<string[][]>([]);
    const [historico, setHistorico] = useState<string[][][]>([]);

    /*useEffect(() => {
        console.log('Todos os times selecionados: ', todosOsTimes);
       }, [todosOsTimes]);
    */

    const addItemToList = (list: string[], item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
        setList([...list, item]);
    };

    const removeItemFromList = (list: string[], item: string, setList: React.Dispatch<React.SetStateAction<string[]>>) => {
        setList(list.filter(i => i !== item));
    };

    const collectItems = () => {
        const allItems = [...capitaes, ...levantadores, ...liberos, ...pontas];
        console.log('Capitaes len: ', capitaes.length)
        console.log('Levantadores len: ', levantadores.length)
        console.log('Liberos len: ', liberos.length)
        console.log('Pontas len: ', pontas.length)
        console.log(allItems);
    }

    const salvar = () => {
        console.log('Implementar lógica de salvar no bd');
    }

    const limpar = () => {
        setCapitaes([]);
        setLevantadores([]);
        setLiberos([]);
        setPontas([]);
    }

    // const sortearTimes = () /*(capitaes: string[], levantadores: string[], liberos: string[], pontas: string[])*/ => {
    //     //aqui, é preciso criar uma variável para receber cada uma das posições
    //     //seleciona aleatoriamente um jogador de cada posição e junta em um time
    //     //após a criação do time, armazenar ele em uma lista (ex: time 1), para poder renderizar
    //     /*
    //      O PROBLEMA É QUE SERIAM NECESSÁRIOS SEMPRE CRIAR UMA LISTA PARA CADA TIME, MAS AO TODO, NÃO
    //      SABEMOS QUANTOS TIMES SERÃO... Mas, dá pra criar uma lista, e dentro dela, colocar outras dentro dela?
    //      Assim ficaria: const times = [[cap1, levante1, libero1, ponta1], [cap2, levante2, libero2, ponta2],
    //       [cap3, levante3, libero3, ponta3]..., [capX, levanteX, liberoX, pontaX]], daí usaria um for pra
    //       percorrer a lista maior e a cada elemento dele, usaríamos um segundo for para renderizar cada elemento
    //       de cada time.
    //     */
       
    // }

    function numeroRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const repetir10 = (capitaes: string[], levantadores: string[], liberos: string[], pontas: string[]) => {
        var corrente: string[][] = []
        var sorteiosTotais: string[][][] = []
        for(let i: number = 0; i < 10; i++){
            corrente = sorteio(capitaes, levantadores, liberos, pontas);
            sorteiosTotais.push([...corrente]);
        }
        console.log('Histórico: ', historico);
        console.log();
        console.log('Sorteios Totais: ', sorteiosTotais.length);
        console.log('Ultimo: ', sorteiosTotais[sorteiosTotais.length - 1])
        setTodosOsTimes(sorteiosTotais[sorteiosTotais.length - 1]);
        setHistorico(sorteiosTotais);
        setMostrarTimes(!mostrarTimes);
    }


    const sorteio = (capitaes: string[], levantadores: string[], liberos: string[], pontas: string[]) => {
        //sempre que o botão é pressionado, um novo time surge e o processo se repete.
        var time: string[] = [];
        var todos: string[][] = []
        var capitaesCopia: string[] = [...capitaes];
        var levantadoresCopia: string[] = [...levantadores];
        var liberosCopia: string[] = [...liberos];
        var pontasCopia: string[] = [...pontas];
        
        
        // console.log('Lista antes do sorteio: ')
        // console.log('Capitaes: ', capitaesCopia)
        // console.log('Levantadores: ', levantadoresCopia)
        // console.log('Liberos: ', liberosCopia)
        // console.log('Pontas: ', pontasCopia)
        

        for (let i = 0; i < capitaes.length; i++){
             //buscar indices dos jogadores aleatoriamente
            let index = numeroRandomInt(0, (capitaesCopia.length));
            time.push(capitaesCopia[index])
            //excluir o indice selecionado da cópia feita de capitães
            if (index > -1){
                capitaesCopia.splice(index, 1);
            }

            //buscar indices dos jogadores aleatoriamente
            index = numeroRandomInt(0, (levantadoresCopia.length));
            time.push(levantadoresCopia[index])
            //excluir o indice selecionado da cópia feita de capitães
            if (index > -1){
                levantadoresCopia.splice(index, 1);
            }

            //buscar indices dos jogadores aleatoriamente
            index = numeroRandomInt(0, (liberosCopia.length));
            time.push(liberosCopia[index])
            //excluir o indice selecionado da cópia feita de capitães
            if (index > -1){
                liberosCopia.splice(index, 1);
            }

            //buscar indices dos jogadores aleatoriamente
            index = numeroRandomInt(0, (pontasCopia.length));
            time.push(pontasCopia[index])
            //excluir o indice selecionado da cópia feita de capitães
            if (index > -1){
                pontasCopia.splice(index, 1);
            }

            
            // console.log('Time sorteado: ', time);
            // console.log();

            todos.push(time);

            time = [];
        }

        return todos;

        // console.log('Lista depois do sorteio: ')
        // console.log('Capitaes: ', capitaesCopia)
        // console.log('Levantadores: ', levantadoresCopia)
        // console.log('Liberos: ', liberosCopia)
        // console.log('Pontas: ', pontasCopia)
        // console.log();
        // console.log(todos);
    }

    return (
        <div>
            <h1>Jogadores por Posições</h1>
                <div className='container'>
                <div className='posicoes'>
                    <h3>Capitães</h3>
                    <input type='text' placeholder="Adicionar" onKeyDown={event => {
                        if(event.key === 'Enter'){
                            addItemToList(capitaes, event.currentTarget.value, setCapitaes);
                            event.currentTarget.value = '';
                        }
                    }} />
                    <ul>
                        {capitaes.map((item, index) => (
                            <li key={index}>{item} <button onClick={() => removeItemFromList(capitaes, item, setCapitaes)}>Excluir</button></li>
                        ))}
                    </ul>
                </div>
                <div className='posicoes'>
                    <h3>Levantadores</h3>
                    <input type='text' placeholder="Adicionar" onKeyDown={event => {
                        if(event.key === 'Enter'){
                            addItemToList(levantadores, event.currentTarget.value, setLevantadores);
                            event.currentTarget.value = '';
                        }
                    }} />
                    <ul>
                        {levantadores.map((item, index) => (
                            <li key={index}>{item} <button onClick={() => removeItemFromList(levantadores, item, setLevantadores)}>Excluir</button></li>
                        ))}
                    </ul>
                </div>
                <div className='posicoes'>
                    <h3>Líberos</h3>
                    <input type='text' placeholder="Adicionar" onKeyDown={event => {
                        if(event.key === 'Enter'){
                            addItemToList(liberos, event.currentTarget.value, setLiberos);
                            event.currentTarget.value = '';
                        }
                    }} />
                    <ul>
                        {liberos.map((item, index) => (
                            <li key={index}>{item} <button onClick={() => removeItemFromList(liberos, item, setLiberos)}>Excluir</button></li>
                        ))}
                    </ul>
                </div>
                <div className='posicoes'>
                    <h3>Pontas</h3>
                    <input type='text' placeholder="Adicionar" onKeyDown={event => {
                        if(event.key === 'Enter'){
                            addItemToList(pontas, event.currentTarget.value, setPontas);
                            event.currentTarget.value = '';
                        }
                    }} />
                    <ul>
                        {pontas.map((item, index) => (
                            <li key={index}>{item} <button onClick={() => removeItemFromList(pontas, item, setPontas)}>Excluir</button></li>
                        ))}
                    </ul>
                </div>
            </div>

            {mostrarTimes && <div>
                {todosOsTimes.map((subArray, index) => {
                        console.log(subArray);
                        return (
                            <div>
                                <p key={index}>Time {index + 1}: {subArray.join(' ')}</p>  {/*Retorna um elemento JSX para cada item*/}
                            </div>
                        )
                    })
                }
            </div>}

            {mostrarTimes && <div>
                <br/>
                <h3>Total de sorteios feitos: 10</h3>
                {historico.map((subArray, index) => {
                    console.log(subArray);
                    return(
                        <div>
                            <h4 key={index}>{index === historico.length - 1 ? 'Atual' : `Sorteio ${index + 1}`}</h4>
                            {subArray.map((time, timeIndex) => (
                                <p key={timeIndex}>Time {timeIndex + 1}: {time.join(', ')}</p>
                            ))}
                        </div>
                    )
                })}
            </div>}

            <button onClick={collectItems} className='btn-sorteio'>Collect Items</button>
            <button onClick={salvar} className='btn-sorteio'>Salvar</button>
            <button onClick={limpar} className='btn-sorteio'>Limpar</button>
            <Link to={'/admin'} className='btn-sorteio'>Voltar</Link>
            <button onClick={() => repetir10(capitaes, levantadores, liberos, pontas)} className='btn-sorteio'>Sortear Times</button>

            
            <br/>
            [Criar botão salvar, que salva todos os times e envia para a área de verificar dos jogadores sem login (isso será trabalho do back)];
            [Alinhar botão de excluir e criar um botão de editar cada um dos nomes dos participantes]
            {/*<br/>{numeroRandomInt(1, 10)} ---- [renderiza direto] */}
        </div>
    )
}

export default DefinirTimes;