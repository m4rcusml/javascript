# ENTENDENDO O QUE É O DOM

O QUE É?
> Document Object Model é um modelo de objetos para documentos.
> E um conjunto de objetos dentro do navegador que vai dar acesso aos componentes internos do site. [...]
> E uma coisa importante que você deve saber fazer é a sua árvore DOM.

### Exemplo de uma árvore DOM
---
![Árvore DOM](arvoreDOm.png)

É um facilitador para acessar os elementos da página por meio de JavaScript. Existe uma árvore com todos os elementos tipo primeiro vem o ´window´ e seus filhos são `document`, `hystory` e mais um q eu n lembro, mas dentro do `document` tem o `html` e dentro dele tem o `head` e o `body` e a partir daí é só sucesso.

Por incrível que pareça os primeiros comandos que eu digitei lá na *Nota 1* eram comandos que acessavam o DOM.

Elementos são qualquer coisa que esteja na árvore DOM e podem ser acessados e alterados em JS.

## Selecionando elementos

1. ### `getElementsByTagName()`
Esse aí pega, como o nome diz, todos os elementos do documento pelo nome da tag. A desvantagem é justamente ele pegar todos os elementos com uma determinada tag.

1. ### `getElementsByClassName()`
Esse aí pega os elementos pelo nome da classe, um pouco menos genérico do que o primeiro.

1. ### `getElementsByName()`
Esse aí pega pelo atributo `name=""` dos elementos.

1. ### `getElementById()`
Ele pega os elementos pelo id.

1. ### `querySelector()` e `querySelectorAll()`
Uma forma mais nova de selecionar elementos.

Exemplo:
```Javascript
document.querySelector('div.exemploClasse')

document.querySelector('div#exemploId')
```

## Alterar o conteúdo de um elemento

Pode ser usado um `.innerText()`, que altera o texto dentro e tal ou, um que acho que seja mais útil, o `.innerHTML()` que altera, igual o innerText porém se tiver algum `strong` ou qualquer coisa assim, ele vai obedecer.