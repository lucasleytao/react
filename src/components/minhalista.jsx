import data from '../endpoint/data' //passo 2

export default function MinhaLista() { //passo 1 > MinhaLista retorna a funcao .map que mapeia a variaval 'data' e joga em (data) cada valor
    return data.map((data) => { //chama a funcao .map que mapeia os objetos de 'data' e joga cada valor em (data)
        return ( //aqui indico o que sera renderizado
            <div key={data.id}>
                <h4>{data.username}</h4>
                <h4>{data.profession}</h4>
            </div>
        )
    })
}

// Passos

/* 1. crio uma funcao que retorna o mapeamento (funcao .map) da variavel 'data' e joga em um parametro que chamo de (data) 
que retorna a indicacao de quais chaves desse parametro serao renderizadas

2. importa a variavel 'data' */