

app.provider('SERIALGENERATOR',function () {
    
    let tamanho=10;

    this.getLength=function(){
        return tamanho;
    }

    this.setLength=function(a){
        tamanho=a;
    }

    this.$get=function(){
        return{
                generate: function () {
                    let serial="";
                    while(serial.length<tamanho){
                        serial+=String.fromCharCode(Math.floor(Math.random()*64)+32);
                    }
                     return serial;
                }
        };
    };
});