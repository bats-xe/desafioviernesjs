const nombreproducto = "batman return arkham city";
let preciounitario = 20000;
let pagar;

let cantdeseada = prompt("que cantidad de " + nombreproducto + " quiere comprar? \n precio unitario: $" + preciounitario );

alert("estas comprando: " + cantdeseada + "producto(s)");

 pagar = (preciounitario*cantdeseada);

alert("va  a pagar: " + pagar);

alert("TICKET \n producto: " + nombreproducto + "\n precio unidad: " + preciounitario + "\n cantidad :"+ cantdeseada + "\n total :" + pagar + " \n gracias por su compra ");


