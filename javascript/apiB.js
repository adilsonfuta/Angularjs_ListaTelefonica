document.getElementById('btn1').addEventListener('click', CarregarContato);
document.getElementById('btn2').addEventListener('click', CarregarListaContatos);


// APENAS 1 USUARIO
function CarregarContato(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'contacto.json', true);
    xhr.onload = function () {
        if (this.status === 200) {

            const valor = JSON.parse(this.responseText);

            //  console.log(this.responseText);
            // console.log(valor);

            const saida = `
                <ul>
                    <li>ID: ${valor.id} </li>
                    <li>Nome: ${valor.nome} </li>
                    <li>Telefone: ${valor.telefone} </li>
                    <li>Data:  ${valor.data}</li>
                    </ul>                
           `;
            /** 
             *  
             
                            <li>Operadora Nome:  ${valor.operadora.nome} </li>
                             <li>Operadora Codigo: ${valor.operadora.codigo} </li>
                             <li>Operadora Categoria: ${valor.operadora.categoria}</li>
                       
             *  
            */
            document.getElementById('cnt1').innerHTML = saida;
        }
    }

    xhr.send();
}

// LISTA DE USUARIOS 
function CarregarListaContatos(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Contactos.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            
            let valores = JSON.parse(this.responseText);
            let saida = '';
            //console.log(this.responseText);
            console.log(valores);
                
            for( let v in valores){
                    saida+= '<ul>'+
                    '<li>ID: ' +valores[v].id+ '</li>' +
                   ' <li>Nome: '+valores[v].nome+ '</li> '+
                   ' <li>Telefone: ' +valores[v].telefone + '</li>'+
                   ' <li>Data:  ' +valores[v].data+ '</li>' +
                    '</ul> ';                    
                   }

            document.getElementById('cnt2').innerHTML = saida;

          
     /*  valores.forEach((v) => {            
                saida += `
                <ul>
                <li>ID: ${v.id} </li>
                <li>Nome: ${v.nome} </li>
                <li>Telefone: ${v.telefone} </li>
                <li>Data:  ${v.data}</li>
                </ul>                       
               `;
            }); */


        }
    }

    xhr.send();
}



/** 
             *  
             
                            <li>Operadora Nome:  ${valor.operadora.nome} </li>
                             <li>Operadora Codigo: ${valor.operadora.codigo} </li>
                             <li>Operadora Categoria: ${valor.operadora.categoria}</li>
                       
             *  
            */