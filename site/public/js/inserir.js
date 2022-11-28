
    function inserir() {
        for (let index = 0; index < listamerc.length ; index++){

            //Recupere o valor da nova input pelo nome do id
            // Agora vá para o método fetch logo abaixo
            var skuVar = listamerc[index].id;
            var nomeVar = listamerc[index].nome;
            var categoriaVar= listamerc[index].categoria;
            var comemorativaVar=listamerc[index].comemorativa;
            var banhoVar=listamerc[index].banho;
            var precocompraVar=listamerc[index].precocompra;
            var precovendaVar=listamerc[index].precovenda;
            var imglocalVar=listamerc[index].imglocal;
            
            // Enviando o valor da nova input
            fetch("/usuarios/inserir", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    skuServer: skuVar,
                    nomeServer: nomeVar,
                    categoriaServer: categoriaVar,
                    comemorativaServer:comemorativaVar,
                    banhoServer:banhoVar,
                    precocompraServer:precocompraVar,
                    precovendaServer:precovendaVar,
                    imglocalServer:imglocalVar,
    
    
                })
            }).then(function (resposta) {
    
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {                
                    console.log(`${listamerc[index].id}`)
                    
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });
    
            return false;
        }
    }

