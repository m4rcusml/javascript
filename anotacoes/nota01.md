# Anotações de JavaScript

Vou passar bem rápido por esse início pq já sei lógica de programação, variáveis e tal.

## Primeiros comandos
---
Esses comandos causam uma interação num arquivo html:
- `window.alert('sample text')` que mostra uma tela com um 'ok'.
- `window.confirm('blablabla')` que mostra uma tela com um 'ok' e um 'cancel'.
- `window.prompt('texto')` que mostra um campo de texto pro usuário digitar.

Eu posso guardar isso aí em variáveis e tal, porém esses comandos criam uma janelinha no navegador, para escrever diretamente no documento HTML eu posso usar o `document.write()` e o `document.writeln`

## Variáveis
---
Eu posso usar acentos e símbolos para criar uma variável.

### Tipos primitivos

- Number (NaN, Int, Float, Infinity)
- String
- Boolean
- Function
- Existem outros tipos como Null (objeto), Arrays, Objetos, Undefined e tal

### Declaração

Posso usar `var`, `let` e `const`.

### Conversão de tipos

- String para Int

```Javascript
Number.parseInt(n)
parseInt(n)
```

- String para Float

```Javascript
Number.parseFloat(n)
parseFloat(n)
```

- String para qualquer um dos dois

```Javascript
Number(n)
```

- Number para String

```Javascript
n.toString()
```
ou
```Javascript
String(n)
```

## Formatação de Strings
---
Existem uns métodos como `toUpperCase()`, `toLowerCase()` e `lenght` (sem parenteses)

### Template Strings

Jeito poggers e igual ao Python de escrever:

```Javascript
var n1 = 4
var n2 = 8
soma = n1 + n2
window.alert(`A soma de ${n1} + ${n2} = ${soma}`)
```

**ATENÇÃO**: Para usar as *template strings* é necessário usar o crase (`) ao invés de aspas simples ou duplas.

Jeito de formatar números:
```Javascript
num.toFixed(2)
// define a quantidade de casas decimais

num.replace('.', ',')
// igual o replace do Java

num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// formata o número para exibir a moeda de determinada região tlg
```
