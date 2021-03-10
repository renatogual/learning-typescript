// O tipo void é utilizado para explicitar quando não há retorno de uma função
function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

semRetorno('José', 'Renato')

const pessoa = {
  nome: 'José',
  sobreNome: 'Renato',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobreNome)
  },
}

export { pessoa } // O obj pessoa já foi declarado no arquivo 01, logo, não é possivel redeclarar por causa do escopo global
