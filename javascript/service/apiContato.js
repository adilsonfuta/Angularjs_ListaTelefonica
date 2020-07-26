
app.factory('ContatosAPI', function ($http,Configuracao) {
    const _getcontatos=function(){
        return  $http.get(Configuracao.baseURL+"/contatos");
    };

    const _saveContato=function(contato){
        return   $http.post(Configuracao.baseURL+"/contatos", contato);
    };

    return{
        getcontatos: _getcontatos,
        saveContato:_saveContato
    };
    
}); 




