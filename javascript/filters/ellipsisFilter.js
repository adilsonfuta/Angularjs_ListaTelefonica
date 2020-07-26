app.filter('ellipsis',function(){

    return function (input,tamanho){

        if(input.length<=tamanho) return input;
        const out=input.substring(0,(tamanho|| 3 ))+"...";
        return out;
     
    };
   
});