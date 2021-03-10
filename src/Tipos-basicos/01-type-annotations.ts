/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos, não é necessário tipar deste jeito)
const myName: string = 'Renato'
const idade: number = 27
const adulto: boolean = true
const simbolo: symbol = Symbol('qualquer-symbol')
// const big: bigint = 10n

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3]
const arrayDeNumeros2: number[] = [1, 2, 3]
const arrayDeStrings: Array<string> = ['a', 'b']
const arrayDeStrings2: string[] = ['a', 'b']

// Objetos => '?' -> significa que o atributo é opcional
const pessoa: { nome: string; idade: number; adult?: boolean } = {
  idade: 27,
  nome: 'José Renato',
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
