import React, { useEffect, useState } from "react";
import filter from '../endpoint/filter'

export default function Filter() {
    const [produto, setProduto] = useState(filter) //atualiza uma nova lista
    const [pesquisa, setPesquisa] = useState('') //''(string vazia: valor inicial) define um elemento de entrada controlado /captura e atualiza o input 

    // console.log(pesquisa)

    useEffect( //recebe como primeiro parametro uma funcao que posso colocar o que eu quiser /sempre que tenho uma redenderizacao do componente o meu useEffect executa
        () => {
            // console.log('useEffect sendo executado...')
            if (pesquisa) {
                const newFilter = filter.filter((item) => {
                    //passa os valores do item para minuscula //verifica se os caracteres de pesquisa estao inclusos na lista original
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProduto(newFilter)
            } else {
                setProduto(filter)
            }
        }, [pesquisa] //esse segundo parametro do useEffect aponta quando ele devera ser executado 
        //nesse caso execute esse bloco de codigo sempre que pesquisa for alterada
    )

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar"
                value={pesquisa} //variavel que recebe o valor do input controlado
                onChange={(e) => setPesquisa(e.target.value)} /> {/*funcao que escuta (captura) esse evento de input e devolve o valor do input */}
            {produto.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.value}</h3>
                    </div>
                )
            })}
        </div>
    )
}

//() parametro que recebe um valor
//=> devolve algo

// .filter() me permite criar uma lista nova so com os elementos que eu quero com base em uma condicao / e uma funcao que passo uma funcao

// PORQUE ISSO FUNCIONA

// crio um efeito colateral (useEffect) com base em uma variavel de estado (pesquisa) entao sempre que pesquisa altera o bloco de codigo 
// do useEffect e executado