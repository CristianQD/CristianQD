let resp="si";
while(resp=="si"){
    let nombre=prompt("Escribe el nombre: ");
    let sexo=prompt("Sexo (F/M)");
    let edad=prompt("Rango de edad(1,2,3):");

    if(sexo=="M"){
        switch(edad){
          case "1" :
            window.alert("Valla al parque ");
           break;
            case "2": window.alert("Haga ejercicio gordo ");
                     break;  
            case "3": window.alert("Pongase a galar huevon ");
            break;
        }
    } else if (sexo=="F"){
    }else{
            window.alert("Ta tonto o que padrino ingrese bien el dato");
        }
       let resp=prompt("¿Quieres registrar a otra persona?");
    
}