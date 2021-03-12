// Tuple
const dadosCliente1: [number, string] = [1, 'Renato']
const dadosCliente2: [number, string, string] = [1, 'Renato', 'Gualberto']
const dadosCliente3: [number, string, string?] = [1, 'Renato'] // O Ultimo valor é opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Renato', 'Gualberto'] // O indice deve ser um numero e o restante strings

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

const dadosCliente5: readonly [number, string] = [1, 'Renato'] // Para tornar imutável
console.log(dadosCliente5)
