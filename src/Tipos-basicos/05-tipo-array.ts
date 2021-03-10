// Array<T> - T[]
function multiplicaArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1)
}

function concatenaArgs(...args: string[]) {
  return args.reduce((acc, valor) => acc + valor)
}
function toUpperCase(...args: string[]) {
  return args.map((item) => item.toUpperCase())
}

const mult = multiplicaArgs(1, 2, 3)
const concat = concatenaArgs('a', 'b', 'c')
const up = toUpperCase('a', 'b', 'c')

console.log(mult)
console.log(concat)
console.log(up)
