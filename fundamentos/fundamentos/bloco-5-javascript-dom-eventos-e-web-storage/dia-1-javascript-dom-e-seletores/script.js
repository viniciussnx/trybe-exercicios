1. /*Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/
function mudaText(){
let paragrafo = document.querySelectorAll('p')[1]
paragrafo.innerText = 'Quero ter terminado o curso e conseguir um bom emprego'

}
  mudaText();
  
  /*  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).*/ 

  function mudacolor(){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)' 

}
   mudacolor()  


      3. //Crie uma função que mude a cor do quadrado vermelho para branco.

      function mudacolorquadrado(){
        document.querySelectorAll('section')[0].style.backgroundColor = 'white' 

}
   mudacolorquadrado()


      4. //Crie uma função que corrija o texto da tag <h1>.
function corrigetext (){
document.querySelector('h1').innerText = 'Java Script'

}

  corrigetext()

      5. //Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

        function maiuscula(){
          document.querySelectorAll('P')[2].innerText = 'TRYBE'
        }
maiuscula()
      6. //Crie uma função que exiba o conteúdo de todas as tags <p> no console.
      
      /*   function conteudo(){
          let content = document.querySelectorAll('p').length
          console.log(content)
        }
conteudo();
 */