import { useEffect, useState } from "react";
import Times from "../Campeonatos/Times";

const DefinirJogos = () => {
    //receber dos times criados
    const times: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
    const times2: string[] = times.slice();
    const [arrayJuntos, setArrayJuntos] = useState<string[][]>([]);

    /*
    useEffect(() => {
        console.log('Todos os jogos possíveis: ', [arrayJuntos]);
        console.log(arrayJuntos.length)
    }, [arrayJuntos])
    */

    times.sort(() => Math.random() - 0.5);
    times2.sort(() => Math.random() - 0.5);

    const juntarArrays = (array1: string[], array2: string[]) => {
        var combinacao: string[][] = []
        var rodadas: string[][] = [];
        
        for(let i: number = 0; i < array1.length; i++){
            for(let j: number = 0 ; j < array2.length; j++){
                combinacao.push([array1[i], array2[j]])
            }
        }

        //console.log(combinacao)
        combinacao = retirarIguais(combinacao);
        //console.log(combinacao);
        combinacao = retirarInversos(combinacao);
        console.log('Sem inversos: ', combinacao)
        
        // rodadas = configurarRodadas(times);
        // console.log('Rodadas -> ', rodadas);



        //setArrayJuntos([]);
        //setArrayJuntos((prevState) => [...prevState, ...combinacao]);

    }
    //: string[][]
    const retirarIguais = (arrayDeArrays: string[][]): string[][] =>  {
       var semIguais: string[][] = [];

       for(let i: number = 0; i < arrayDeArrays.length; i++){
            for(let j: number = 0; j < 1; j++){
                if(arrayDeArrays[i][j] !== arrayDeArrays[i][j +1]){
                    semIguais.push(arrayDeArrays[i]);
                    //console.log('Não iguais');
                }
            }
        }
        //console.log('Dentro da função: ', novaCombinacao);
        return semIguais;
    }

    const retirarInversos = (arrayDeArrays: string[][]): string[][] => {
        let inverso: string[] = []
        var semInversos: string[][] = [];
        
        for(let i: number = 0; i < (arrayDeArrays.length - 1); i++){
            inverso = arrayDeArrays[i].reverse();

            for(let j: number = i + 1; j < arrayDeArrays.length; j++){
                if(JSON.stringify(inverso) === JSON.stringify(arrayDeArrays[j])){
                    semInversos.push(inverso);
                    //console.log(`Inverso encontrado: ${inverso} -> ${arrayDeArrays[j]}`);
                }
            }
        }

        return semInversos;
    }

    const configurarRodadas = (times: string[]) => {
        var quantidadeJogosPorRodada: number = 0;
        let partidasOrganizadas: string[][] = [];

        if(times.length % 2 === 0){
            quantidadeJogosPorRodada = times.length / 2;
        } else {
            quantidadeJogosPorRodada = ((times.length / 2) - 0.5)
        }

        /*
        é preciso levar em consideração que cada rodada tem o número citado acima de jogos.
        Então cada time (elemento do array dentro do array), deve colocar um array 
        */
    }
    

    
    return (
        <div>
            {times}
            <br></br>
            <br/>
            <br/>
            {times2}
            <br/>
            <button onClick={() => juntarArrays(times, times2)}>Misturar</button>
        </div>
    )
}

export default DefinirJogos;