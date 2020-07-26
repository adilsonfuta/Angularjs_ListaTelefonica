

app.service('ServiceAPI', function($http,Configuracao) {
    this.GetOperadora = function () {
        return   $http.get(Configuracao.baseURL+"/operadoras");
    }
});  

 