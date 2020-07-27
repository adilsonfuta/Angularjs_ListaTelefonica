app.directive('uiAlert', function(){
    return{
        templateUrl:"View/alert.html",
        replace:true,
        restrict:"AE",
        scope:{
            topic: "@title",
           // mensagemError: "=message" 
        }, 
        transclude:true
    }; 
});