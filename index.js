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
 * 
 */

var admin = document.querySelector("#exampleInputAdmin")


var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(
    function(field,index)
    {
        console.log(field.name);
    }
);




