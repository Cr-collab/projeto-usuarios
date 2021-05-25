//G1 - Variaveis
/**
 * <script src=""></script> -> script apontando para outra página
 * <script ></script> -> script incorporado
 */

//G2 - manipulando o DOM
/**
 *  tudo o que nos temos dentro de um documento nós chamamos de elementos.
 * o javascript pode criar elementos no documneto e manipulalos.
 * 
 * QUANDO VOCÊ ESTÁ USANDO O SEU NAVEGADOR É UMA WINDOW É UMA JANELA.
 * NOS PODEMOS COM WINDOW ACESSAR O HISTORICO FECHAR O NAVEGAR ABRIR UMA
 * NOVA JANELA EU CONSIGO DAR REFERESH NA TELA.
 * 
 * MAIS NA PARTE DO SITE NÓS CHAMAMOS DE DOCUMENTOS.
 * document um objeto javascript que por ele temos acesso a 
 * arvore do documento.
 * 
 * todo objeto tem propriedades e métodos.
 */
// G3 - Variaveis 
/**
 *  Variaveis são espaços na memoria  
 * que nelas são armazenados valores de forma temporaria.
 * 
 * var nome = document.querySelector("#exampleInputName");
//a variavel nome tem a referencia do input do nome do usuario
 
/**
 * nome.value = 'Cristiano';
// |    \=> estamos pegando o value e forçando ela ter um valor.
// |==> pegamos avriavel nome  

nome.style.color = 'blue'
// acessando a variavel nome e pegando o atributo style e mudo cor dele .

G4 - Variaveis e seletores

cuidados com variaveis ,
 1 - não use nome de comandos nativos do JS
 2 - não use numeros no começo
 3 - não use caracteres especias exceto o underline
 4 - usar o padrão cmaielCase
 
 document.querySelectorAll("#form-user-create [name"gender"]:checked")
   ||
   ===> aqui esta entrando dentro do formulario e procura 
   qualquer campo que tenha um atributo name com nome gender
   mais como queremos aquele que foi clickado então vou 
   pegar so que esta checked.


G5- for each

Sempre que formos digitar de mais você criar codigos que nós chmamos de abstrato,
quando voçê programar seus codigos tente não deixalos tão especificos , 
por que você precisar mudar alguma estrutura do seu site ou do seu projeto o 
ideal que seu codigo  ele têm que se adaptar o mais facil possivel em termos de manutenção.
é isso que nós chamos de abstração, é você não  programar de uma forma ingessada de mais 
e dessa forma 

var name = document.querySelector("#exampleInputName");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var Nome
 * 
      
 var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
 /*||
 ===> aqui esta entrando dentro do formulario e procura 
 qualquer campo que tenha um atributo name com nome gender
 mais como queremos aquele que foi clickado então vou 
 pegar so que esta checked.
 
 var birth = document.querySelector("#");
 /**  |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var aniversário
  * 
  
 
 var country = document.querySelector("#exampleInputCountry");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var PAÍS
  * 
   
 
 var  email = document.querySelector("#exampleInputEmail");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var email
  * 
  
 var password = document.querySelector("#exampleInputPassword");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var senha
  * 
  
 var photo = document.querySelector("#exampleInputFile");
 /**   |       |        \=> estou selecionado um elemento da arvore.
  *    |      |==> acessa o documento html
  *    |
  *    ==> var fotos
  * 
  
 
 var admin = document.querySelector("#exampleInputAdmin")


ela ta muito ingessada , não pode modificar os nomes , ta tudo ammarrado aquele layout
o ideal é que seu codigo seja autosuficiente , inteligente ao ponto de se adaptar.

então agente vai pegar esse processo que fizemos agora um pouco mais ionteligente 
para isso nós vamos  selecionar aquele formulário  e vamos dizer assim você achou o formulario ,
achei entra dentro dele e pra cada campo que você encontrar faça uma rotina  de codigo 
então para cada campo é um comando que nós temos é um metodo chamado forech,
vou acessar o formulario e dizer assim , achou o formulario , achei , então esse formulario ponto forech
para cada  campo dentro dele para cada informação que você encontar dentro dele  se ele tiver cinco campos
ou se ele tiver cinquenta   o mesmo trecho de códifo vai ser o suficiente para percorrer essa informção ai
 dentro .

 var fields =  document.querySelectorAll("#form-user-create [name] ");
      |                        |             \-> aqui estou selecionando id do frmulario 
      |                        |                  mais eu quero encontar todos os meus campos , os que esse campos tém em comum o name ;
      |                        |                    traz para min todos os campos que tém name
      |                        |=>> aqui esta fazendo uma pesquisa 
      :                             de todos os campos .
      ==> 
         que significa campo .


     fields.forEach
             para cada campo que você encontra executa esse codigo aquie    
     (
         function(field,index)
         {
               console.log(field)
         }
     );    
 







 
*/
