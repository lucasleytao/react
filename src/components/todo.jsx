import React, { useEffect, useState } from "react";
import todo from '../endpoint/todo'

export default function Todo() {
    const [tarefas, setTarefas] = useState([]) //set (atualizar) no state

    useEffect(
        () => {
            async function buscarDados() { //funcao que busca dados de uma api
                const resultado = await fetch('https://jsonplaceholder.typicode.com/todos') //await fetch: espere buscar dados json de uma api externa
                const resultadoFinal = await resultado.json() //.json() funcao assincrona que faz o parse (analise) da resposta
                return resultadoFinal // retorna os dados da api
            }
            // console.log(buscarDados())
            buscarDados().then(res => setTarefas(res)) //a funcao .then recebeu os dados da funcao buscarDados() no parametro 'res' e retornou o dados na tela
        }, [])

    return (
        <div>
            <ol>
                {tarefas.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>
                                {item.title}
                                {item.completed ? <strong> - Tarefa Concluída</strong> : null}
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}

// useEffect(() => {},[]) (primeiro parametro)arrow function, (segundo parametro) array de dependencias vazio: e executado quando a funcao
//  Todo e executado uma unica vez

// assim que abro o aplicativo e entro na tela
// ele abre o componente assim que termina ele executa o efeito colateral que ira buscar os dados da api

/*O QUE ESTA ACONTECENDO

Estou utilizando um efeito colateral (useEffect) com uma funcao .fetch (busca) onde espero (await) o resultado final dos dados onde
posso setar (set: atualizar) um estado local, uma vez atualizado o efeito colateral ira renderizar os dados novamente na tela
*/