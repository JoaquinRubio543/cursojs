/*alert(`Bienvenido a BebidasTM`);
edad = Number (prompt(`Es usted mayor de 18 años ? Escriba 1 para NO, o 2 para SI`));

if(edad == 1){
    alert(`Acceso denegado`);
}*/

let total = 0
let agregar

    Nombre = prompt(`Bienveindo a bebidasTM, ingrese su nombre`);
    do{
        edad = Number(prompt(`Ingrese su edad`));
        if(edad < 18){
            alert(`Acceso denegado`);
        } else if (edad >= 18){
                let producto= prompt(`Que bebida desea adquirir ?`);
                let precioproducto= prompt(`Indicar el precio del mismo`);
                if (precioproducto < 0){
                    alert(`Precio invalido`)
                }else{
                    let cantidad= prompt("Indicar cantidad");
                }
                if (cantidad <= 0){
                    alert(`La cantidad tiene que ser mayo a 1`)
                }else{
                    total = total + precioproducto*cantidad;
                }
            }
            agregar= Number (prompt(`Desea agregar otro producto ? 1 par SI, 2 para NO`));
    } while (agregar == 1) {
    alert(`Su total, sr/sra ${Nombre} es de ${total}`)
        }

// Estuve haciendo varios cambios pero no comprendo porque no se muestra el prompt de agregar despues de el de cantidad




/*Persona1=prompt ("Cuanto dinero tenes Persona1 ?");
Persona2=prompt ("Cuanto dinero tnees Persona2 ?");
Persona3=prompt ("Cuanto dinero tenes Persona3 ?");

Persona1= parseFloat(Persona1);

if(Persona1 >= 1 && Persona1 < 2){
    alert("Comprate el helado de 1.50$ Persona1");
    alert("Te sobra " + (Persona1 - 1))
}
else if (Persona1 >= 2 && Persona1 <3){
    alert ("<b>Comprate</b> el helado de 2.50$ Persona1");
}
else{
    alert ("<b>no</b> te compres nada Persona1");
}

if(Persona2 >= 1 && Persona2 < 2){
    alert("<b>Comprate</b> el helado de 1.50$ Persona1");
}
else if (Persona2 >= 2 && Persona2 <3){
    alert ("Comprate el helado de 2.50$ Persona2");
}
else{
    alert ("no te compres nada Persona2");
}

if(Persona3 >= 1 && Persona3 < 2){
    alert("Comprate el helado de 1.50$ Persona3");
}
else if (Persona3 >= 2 && Persona3 <3){
    alert ("Comprate el helado de 2.50$ Persona3");
}
else{
    alert ("no te compres nada Persona3");
}*/