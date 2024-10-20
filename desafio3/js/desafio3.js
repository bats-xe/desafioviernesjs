const nombreproducto = "batman return arkham city";
let preciounitario = 20000;
let pagar;
let desc;
let pagardesc;

let cantdeseada = prompt("que cantidad de " + nombreproducto + " quiere comprar? \n precio unitario: $" + preciounitario );

alert("estas comprando: " + cantdeseada + "producto(s)");

if(cantdeseada >= 5){
   pagar = preciounitario*cantdeseada;
   desc = (pagar*10) / 100;
   alert("tiene un descuento del 10%")
   pagardesc= pagar-desc;
   alert("va  a pagar: " + pagardesc );
   alert("TICKET \n producto: " + nombreproducto + "\n precio unidad: " + preciounitario + "\n cantidad :"+ cantdeseada + "\n total :" + pagardesc + " \n gracias por su compra ");
}else{
    pagar = (preciounitario*cantdeseada);

alert("va  a pagar: " + pagar);

alert("TICKET \n producto: " + nombreproducto + "\n precio unidad: " + preciounitario + "\n cantidad :"+ cantdeseada + "\n total :" + pagar + " \n gracias por su compra ");

}


