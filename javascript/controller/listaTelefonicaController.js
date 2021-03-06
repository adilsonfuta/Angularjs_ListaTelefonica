      
app.controller("listaTelefonicaController", function ($scope, ContatosAPI,ServiceAPI,SERIALGENERATOR) {


    $scope.info = " Lista Telefonica ";
    $scope.contatos = [];
    $scope.operadoras = [
    ];

    let carregarContatos = function () {
        ContatosAPI.getcontatos().then(
            function (response) {
                $scope.contatos = response.data;                
            },
            function (response) {            
                $scope.mensagemError = "Ops :) Não foi Possivel Carregar os Dados!";
            }
        );
        // politica da mesma origem jsonp ou CORS (Cabecalho http)
      //  console.log(baseURL.api);
    };


    let CarregarOperadoras = function () {
       ServiceAPI.GetOperadora().then(
            function (response) {
                $scope.operadoras = response.data;
            });

    };

    $scope.adicionarcontato = function (contato) {
        contato.serial=SERIALGENERATOR.generate();
        contato.data = new Date();
       ContatosAPI.saveContato(contato).then(
            function (response) {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos();
            });
    };

    $scope.ApagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.ApagarContatos2 = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            ContatosAPI.removerContatoID(contato.id).then(
                function (response) {
                    $scope.contatos = response.data;
                     carregarContatos();  
            },
                function (response) {            
                    $scope.mensagemError = "Erro ao Remover ";
                }) 
            if (!contato.selecionado) return contato;
        });
    };

    $scope.RemoverContato = function (contatos) {
        let apagarELES=[];
        $scope.contatos = contatos.filter(function (contato) {
            if(contato.selecionado)
                apagarELES.push(contato.id);
                for(x in apagarELES){
                    console.log(x);
                     ContatosAPI.removerContatoID(x).then(
                        function (response) {
                            $scope.contatos = response.data;
                             carregarContatos();  
                    },
                        function (response) {            
                            $scope.mensagemError = "Erro ao Remover ";
                        }) 
                }                    
                 return contato;   
        })
    };

    $scope.iscontatoSel = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.VALOR_PARA_ORDENAR = campo;
        $scope.SentidoOrdenar = !$scope.SentidoOrdenar;
    }

    $scope.add_classe_cor = "selecionado";
    $scope.add_classe_negrito = "negrito";
    $scope.falha1 = "Por favor Preencher o Nome";
    $scope.falha2 = "Preencher devidamente com ate 10 Letras";
    $scope.falha3 = "Por favor Preencher o Telefone";
    $scope.falha4 = " Preencher o Telefone assim DDDXXXNNN ou 244DDDXXXNNN";

    carregarContatos();
    CarregarOperadoras();
});

