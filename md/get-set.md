Em JavaScript, os métodos `get` e `set` são usados para controlar o acesso às propriedades de um objeto. Eles permitem que você defina como um valor é obtido (`get`) ou atribuído (`set`) a uma propriedade, dando mais controle sobre o comportamento do objeto.

### `get`
- O método `get` é usado para **obter** o valor de uma propriedade.
- Ele é chamado automaticamente quando você tenta acessar a propriedade.

### `set`
- O método `set` é usado para **atribuir** um valor a uma propriedade.
- Ele é chamado automaticamente quando você tenta modificar o valor da propriedade.

### Exemplo Prático:

```javascript
const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',

  // Getter para o nome completo
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },

  // Setter para o nome completo
  set nomeCompleto(valor) {
    const partes = valor.split(' ');
    this.nome = partes[0];
    this.sobrenome = partes[1];
  }
};

// Usando o getter
console.log(pessoa.nomeCompleto); // Saída: "João Silva"

// Usando o setter
pessoa.nomeCompleto = 'Maria Souza';
console.log(pessoa.nome); // Saída: "Maria"
console.log(pessoa.sobrenome); // Saída: "Souza"
```

### Resumo:
- **`get`**: Usado para acessar o valor de uma propriedade.
- **`set`**: Usado para modificar o valor de uma propriedade.
- Eles são úteis para adicionar lógica personalizada ao acessar ou modificar propriedades de um objeto.