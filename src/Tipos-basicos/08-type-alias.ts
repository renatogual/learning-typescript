type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}
type cor1 = 'Vermelho' | 'Azul' | 'Branco'
type cor2 = 'Preto' | 'Amarelo'
type corPreferida = cor1 | cor2

const pessoa: Pessoa = {
  nome: 'Renato',
  idade: 27,
  salario: 200_000, // O underline é entendido pelo typescript normalmente, como se fosse 200000
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Vermelho'))
