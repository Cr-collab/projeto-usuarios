var name = document.querySelector("#exampleInputName");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var Nome
 * 
 */     
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
/*||
===> aqui esta entrando dentro do formulario e procura 
qualquer campo que tenha um atributo name com nome gender
mais como queremos aquele que foi clickado então vou 
pegar so que esta checked.
*/
var birth = document.querySelector("#birth");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var aniversário
 * 
 */ 

var country = document.querySelector("#exampleInputCountry");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var PAÍS
 * 
 */ 

var  email = document.querySelector("#exampleInputEmail");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var email
 * 
 */ 
var password = document.querySelector("#exampleInputPassword");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var senha
 * 
 */
var photo = document.querySelector("#exampleInputFile");
/**   |       |        \=> estou selecionado um elemento da arvore.
 *    |      |==> acessa o documento html
 *    |
 *    ==> var fotos
 * var admin = document.querySelector("#exampleInputAdmin")
 * 
 *  ela ta muito ingessada , não pode modificar os nomes , ta tudo ammarrado aquele layout
 *  o ideal é que seu codigo seja autosuficiente , inteligente ao ponto de se adaptar.
 */
/****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/




var user = {}
// o objeo user ele ta  no escopo global por isso ele te uma area de atuação maior


var fields = document.querySelectorAll("#form-user-create [name]")
// peguei todos os campos dentro do form com names , criei node list dessa pesquisa


/*
document.querySelectorAll("button").forEach(function(){
    this.addEventListener("click", function(){
//  este.adicione uma escuta  para um evento , qual é o evento  click 
// , quando clickarem a onde bom qaundo ckickarem no botão,
// bom qual o botão , veja que no querySelectorAll agente pegou todos os botãoes 
//  quando clickar em quanquer botão dispara esse evento.
        console.log("cickou")
    } )
})
*/

function addLine(dataUser)
{
    
      
     var tr = document.createElement("tr");

     tr.innerHTML =
     `
     <td>
                      <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                      </td>
                      <td>${dataUser.name}</td>
                      <td>${dataUser.email}</td>
                      <td>${dataUser.admin}</td>
                      <td>${dataUser.birth}</td>
                      <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
     </td>
     `
     document.getElementById("table-users").appendChild(tr)
}

document.getElementById("form-user-create").addEventListener("submit",function(event)
{
    event.preventDefault()
           //para tudo que esse cara disparou .
           // ele vai para com comportamento padrão
          
fields.forEach(
    // para cada campo que tiver faca     
        function(field,index)
        {
             if(field.name == "gender")
             // se o field que vier tiver o nome gender
             {
                 //faz o que ta aqui dentro
                if (field.checked)
                // se o field esta checkado
                {
                  user[field.name] = field.value;
                  // aqui estamos acessando objeto user e colocando valores selecionados no formulario
                }
                 
             }else
             //se não
             {
                 user[field.name] = field.value;
                 // aqui estamos acessando objeto user e colocando valores selecionados no formulario
             }
        }
    );

    var objectUser = new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.password,
        user.email,
        user.photo,
        user.admin
         );


         addLine(objectUser)
    
    
}) 






