const alunos = [
  {
    name: 'João',
    score: 9
  },
  {
    name: 'Maria',
    score: 8
  },
  {
    name: 'Pedro',
    score: 7
  },
  {
    name: 'Ana',
    score: 10
  },
  {
    name: 'Bruno',
    score: 6
  },
  {
    name: 'Carla',
    score: 5
  },
  {
    name: 'Rafael',
    score: 4
  },
  {
    name: 'Laura',
    score: 3
  },
  {
    name: 'Gustavo',
    score: 2
  },
  {
    name: 'Isabela',
    score: 1
  },
  {
    name: 'Ricardo',
    score: 0
  },
]

function alunosAprovados(alunos) {
  return alunos.filter((aluno) => aluno.score >= 6);
};

console.log(alunosAprovados(alunos));