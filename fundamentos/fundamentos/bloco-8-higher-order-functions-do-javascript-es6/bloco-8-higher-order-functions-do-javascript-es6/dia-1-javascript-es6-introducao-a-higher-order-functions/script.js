1 - //Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .



//1 CRIAR UMA FUNÇÃO
//2 RETORNAR UM OBJ { nomeCompleto, email }
//3 PASSAR A FUNÇÃO COMO PARÂMETRO DA HOF newEmployees
//4 A FUNÇÃO DEVE RECEBER O NOME COMPLETO COMO PARÂMETRO 
//5 GERAR EMAIL  nome_da_pessoa@trybe.com




const newEmployees = (enviarEmail) => {
  const employees = {
  id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_'); // to;LowerCase passa toas as letras para minísculas . a função split separa as palavras a função join junta os espaços com o _ underline
    return { fullName, email: `${email}@trybe.com` }; // templaite string, 
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator)); // chama a função newEmployees e passa como parâmetro a employeegeneration que tem os nomes 




  //2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


  const numberChecker = (myNumber, number) => myNumber === number;

  const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
  
    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
  };
  
  console.log(lotteryResult(2, numberChecker));


  //- Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//  Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));