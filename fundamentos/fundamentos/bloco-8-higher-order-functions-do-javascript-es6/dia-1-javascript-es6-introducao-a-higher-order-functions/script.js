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




  function enviarEmail (fullName, ) {
    return { nomeCompleto, email }
  }
  console.log(newEmployees(enviarEmail))