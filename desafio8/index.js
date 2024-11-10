// const parrafo = document.createElement("p");
// parrafo.textcontent = "Algo real";
// parrafo.classList.add("jajaja");

// const miLista = document.getElementById("miLista");

// const Lista1 = document.createElement("li");
// Lista1.textContent = "Mate";

// const Lista2 = document.createElement("li");
// Lista2.textcontent = "agua";


// document.body.appendChild(Lista1);
// document.body.appendChild(Lista2);

// let arrayGadgets = [
//     {
//         nombre: "Batarang",
//         cantidad: 16,
//     },
//     {
//         nombre:"Batgarra",
//         cantidad:1,
//     },
//     {
//         nombre: "Bombas de humo",
//         cantidad:30,
//     },
// ]
// for(let i=0 ; i< arrayGadgets.length ; i++){
//     console.log("============================");

//     const h2 = document.createElement("h2");
    
//     h2.innerHTML = arrayGadgets[i].nombre;

//     const h3 = document.createElement("h3");

//     h3.innerHTML = arrayGadgets[i].cantidad;

//     document.body.appendChild(h2);
//     document.body.appendChild(h3);


// };

let arrayProductos = ["comic #1", "comic #2", "comic #3"];

for ( const Producto of arrayProductos){

    const h2 = document.createElement("h2");

    h2.innerHTML = Producto;

    document.body.appendChild(h2);
}
