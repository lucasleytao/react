import React from "react";

export default function MeuBotao(props) { //props e recebida como parametro na declaracao do componente
    // console.log(props.msg)//mostra no terminal o valor da props /forma de debugar
    return (
        <button>{props.msg}</button>
    )
}