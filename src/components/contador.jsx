// toda logica de eventos e gerenciamento de estado e definida dentro do corpo do componente

import { React, useState } from "react";

export default function Contador() {
    let [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1) //aqui executo outra funcao chamada setContador que define o estado da variavel contador
        // console.log('aumentando', contador) //debug da funcao
    }
    function diminuir() {
        setContador(contador - 1)
        // console.log('diminuindo', contador)
    }

    // console.log('renderizando meu contador...') //teste de renderizacao dentro do corpo do componente /debug
    // return (
    //     <div>
    //         <h1>Contador</h1>
    //         <h3>{contador}</h3> {/*chamo a variavel contador atualizada*/}
    //         <div style={{margin: '10px 0px 10px 0px'}}>
    //             {contador === 0 ? 'Vamos começar!' : contador < 0 ? 'Valor negativo' : 'Valor positivo'} {/*operador ternario condicional*/}
    //         </div>
    //         <div>
    //             <button onClick={aumentar}>Aumentar</button> {/* onClick: agarra um evento do navegador e chama a funcao aumentar */}
    //         </div>
    //         <div>
    //             <button onClick={diminuir} style={{ marginTop: '10px' }}>Diminuir</button>
    //         </div>
    //     </div>
    // )

    //CONDICAO DE RETURN *Utilizado geralmente em casos de loadings...

    if (contador > 5) {
        return (
            <>
                <h1>Valor muito alto!</h1>
                <div>
                    {/* <div>
                        <button onClick={aumentar}>Aumentar</button>
                    </div> */}
                    <div>
                        <button onClick={diminuir} style={{ marginTop: '10px' }}>Diminuir</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <div>
                <button onClick={aumentar}>Aumentar</button>
            </div>
            <div>
                <button onClick={diminuir} style={{ marginTop: '10px' }}>Diminuir</button>
            </div>
        </>
    )
}