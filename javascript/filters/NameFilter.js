app.filter('nameFilter',function(){
return function (input){
       let listadenome=input.split(" ");
      let nova=listadenome.map(function(nome){
          if(nome=='da' || nome=='de') return nome;
            return nome.charAt(0).toUpperCase()+nome.substring(1).toLowerCase();
       });
       
    return nova.join(" ");
};
});