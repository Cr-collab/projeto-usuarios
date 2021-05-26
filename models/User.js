class User 
{
    /**
     * Esse é um padrão diferente do que agente tem usado 
     * para o nome de  métodos assim por diante ,
     * Toda classe começa por letra maiscula  isso é uma conveção 
     * um detalhe importante é que voce notou a classe  abriu 
     * e fechou aspas  e aqui vai entrar muito fortemete aquela 
     * parte de escopo area de atuação.
     * 
     * Repare também que por enquanto a classe não tém nada 
     * então uma classe que só tem o ome dela não serve para nada .
     * o que importa na verdade não é bem a classe e sim que está dentro dela .
     * pensa na classe  como fosse uma pasta zipada se não tiver nada la dentro naço faz 
     * sentindo ela esta zipada.
     * 
     * a primeirra cois que você vai fazer é cria o método constructor quando voçê instanciar uma
     * a primeira coisa que vai chamar esse metodo onde passamos os parametros para trabalhar dentro da ]
     * nossa classe.
     * 
     * Métodoss são açoes que seram executada. 
     * 
     * agora vamos gardar cada um desses campos que nós vamos receber do nosso contructor 
     * dentro do meu Objeto 
     * 
     * o método contructor é um metodo chamado automaticamente quando invocamos a classe.
     * 
     * o mais legal da orientação a objeto é que você consegue controlar o acesso á informação 
     * e como ela acontece .
     * 
     * 
     * 
     * 
     */

    constructor(name,gender, birth,country,email,passaword,photo,admin)
    {
             this.name                =                            name;
        //   este.atributo   esta sendo atribuido a       variavel name recebido com parametro do contructor.
             this.gender = gender; 
             this.birth = birth;
             this.country = country;
             this.email = email;
             this._passaword = passaword;
             this.photo = photo;
             this.admin = admin;
    }
}