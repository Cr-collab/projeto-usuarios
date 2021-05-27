
class UserController
{
    constructor(formId, tableId)
    {
            this.formEl =  document.getElementById(formId);
            this.tableEl =  document.getElementById(tableId)
            this.OnSubmit();
    }


    
   

    OnSubmit()
    {
       
          
        this.formEl.addEventListener("submit", event =>
        {
            event.preventDefault();
                //para tudo que esse cara disparou .  
                 // ele vai para com comportamento padrão

             let values = this.getValues();
             
             this.getPhoto().then(
                 (content)=>
                 {
                     values.photo = content;
                     this.addLine(values);
                 },
                 (e) =>
                 {
                     console.error(e)
                 }
             );
             
;
             
          
            
        });
    } 
    
 getPhoto()
 {

    return new Promise((resolve , reject ) =>
    {
        let fileReader = new FileReader();

        let elements = [...this.formEl.elements].filter(item =>
           {
               if (item.name === 'photo')
               {
                   return item;
               }
           })
   
           console.log(elements)
   
           let file =  elements[0].files[0];
   
        fileReader.onload = () =>
        {
               resolve(fileReader.result);
        };


        fileReader.onerror = (e)=>
        {
               reject(e);
        };
   
        fileReader.readAsDataURL(file);
    });
     
 }   


    
addLine(dataUser)
{
    
      
    

     this.tableEl.innerHTML =
     `
     <tr>
     <td>
                      <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
                      </td>
                      <td>${dataUser.name}</td>
                      <td>${dataUser.email}</td>
                      <td>${dataUser.admin}</td>
                      <td>${dataUser.birth}</td>
                      <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
     </td>
     </tr>
     `
     
}

getValues()
{
      

       let user = {};
                
        [...this.formEl.elements].forEach(
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

             return new User(
                user.name,
                user.gender,
                user.birth,
                user.country,
                user.password,
                user.email,
                user.photo,
                user.admin
                );

        
}
}
