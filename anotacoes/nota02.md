## Operadores
---
Existem operadores **aritméticos, de atribuição, relacionais, lógicos e terário.**

### Aritméticos

- +, -, *, / e % (padrão);
- ** para exponenciação.

A ordem de cálculo é igual à matemática, e aqui também funcionam os símbolos de incremento (++) e decremento (--), tbm o +=, -=, *=, etc.

### Operador de **igualdade** e **identidade**

O operador de `==` no JavaScript é mais abrangente, se você comparar 5 com '5', o JS retorna `true`, portanto, para usar o operador de igualdade que nem uma linguagem Java e tal, existe o `===`.

Com tudo isso em uma única expressão a ordem de precedencia fica da seguinte forma:

1. Operadores aritméticos (na ordem da matemática)
1. Operadores relacionais
1. Operadores lógicos
    1. not ( `!` )
    1. and ( `&&` )
    1. or ( `||` )

### Operador ternário

Exemplo:
```Javascript
// teste ? `retorno caso seja true` : `retorno caso seja false`

var n1 = 5
n1 == 5 ? 'sim' : 'nao'
```