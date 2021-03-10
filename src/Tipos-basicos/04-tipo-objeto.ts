// Quando for necessário extender um objeto, sem saber inicialmente todas as chaves.
const objetoA: {
  chaveA: string
  chaveB: string
  [key: string]: unknown
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
}

objetoA.chaveC = 'Outro valor'

console.log(objetoA)
