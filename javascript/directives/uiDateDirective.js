app.directive('uiDate', function(){
    return{
        require: "ngModel",
       link: function(scope,element,attrs,ctrl){
        let formateDte=function(date){
            
            let mask=/[^0-9]+/g;
           
            date=date.replace(mask,'');
           
            if(date.length>2){
                 date.subtring(0,2)+"/"+date.subtring(2);
            }               
            if(date.length>5){
                date.subtring(0,5)+"/"+date.subtring(5,9);
            }                
            return date;
        };

        element.bind("keyup", function(){
            ctrl.$setViewValue(formateDte(ctrl.$setviewValue));
            ctrl.$render();
            console.log(date);
        });
          
       }
    }; 
});