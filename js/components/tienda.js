//script funcionalidad de carrito y tienda
import { Inventario } from "../app/bd/inventario.js";
import { Producto } from "../app/productoCafeteria.js";
let productosComprados = [];
export class TiendaMainPage extends HTMLElement{
    constructor(){
        super();

        this.render();
        this.evenBtnPapas();
        this.evenBtnPastel();
        this.evenBtnCafe();
        if(localStorage.getItem("Productos") != null){
            productosComprados = JSON.parse(localStorage.getItem("Productos"));
        }
    }

render(){

    this.innerHTML = /*html*/ `
    
    <section>
    <h1 class="first-message">Cafeteria Virual</h1>
    <p class="homepage">Seccion compra</p>
</section>
<section>
    <h3 class="first-message">Catálogo</h3>

</section>


<div class="products">

   <div class="carts">
       <img src="../images/papasmargarita.jpg" alt="">
       <p>Papas</p>
       <p>2000$</p>

       <div class="pie"> 
        <a href="#"  id="btnPapas" name="0">Añadir al carrito</a>
           
       </div>
   </div>

   <div class="carts">
       <img src="../images/Pastel-de-Pollo7.jpg" alt="">
       <p>Pasteles</p>
       <p>2300$</p>

       <div class="pie"> 
        <a href="#" id="btnPastel" name="1">Añadir al carrito</a>
           
       </div>
   </div>

   <div class="carts">
       <img src="../images/cafe.jpg" alt="">
       <p>Cafe</p>
       <p>800$</p>

       <div class="pie"> 
        <a href="#" id="btnCafe" name="2">Añadir al carrito</a>
           
       </div>
   </div>

</div>`
}
evenBtnPapas(){
   
   console.log('holaaaa')
    let btnPapas = document.querySelector('#btnPapas')
    btnPapas.addEventListener('click', (e) => {
      
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 0)
         
          this.crearModal(productoArray)



    })
    
}




evenBtnPastel(){
   
    let btnPastel = document.querySelector('#btnPastel')
    btnPastel.addEventListener('click', (e) => {
        console.log('hola')
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 1)
         
          this.crearModal(productoArray);



    })
    
}


evenBtnCafe(){
   
    let btnPastel = document.querySelector('#btnCafe')
    btnPastel.addEventListener('click', (e) => {
        console.log('hola')
        let elemento =  Inventario.filter(productoId => productoId.id == e.target.name)

        
        let producto = new Producto(elemento[0].id,elemento[0].nombre,elemento[0].costo,new Date())
        
          productosComprados.push(producto);
          localStorage.setItem("Productos",JSON.stringify(productosComprados))  
          let productoArray =  productosComprados.filter(elementId => elementId._idProducto == 2)
         
          this.crearModal(productoArray);



    })
    
}


crearModal(productoArray){

let divModal = document.querySelector(this.selectDivModal(productoArray))
console.log(divModal)
let total = productoArray.length * productoArray[0]._costoProducto
console.log(total)
let modalHtml = /*html*/
`    <button class="close-btn">X</button>
            <h3>Mi Carrito</h3>
            <div id="imgProducto">
            
            </div>
            <div class="item">

                        <div class="item-content">
                            
                            <p>${productoArray[0]._nombreProducto}</p>
                            <p>${productoArray[0]._costoProducto}</p>
                            <p>cantidad:${productoArray.length}</p>
                        </div>
                    
            </div>
                <h4>TOTAL:${total}</h4>
                <button class="delete-product">X</button>
            </div>
`;
let img = document.createElement('img');
if(productoArray._idProducto == 0){
    img.src ='../images/papasmargarita.jpg';
}else if(productoArray._idProducto == 1){
    img.src ='../images/Pastel-de-Pollo7.jpg';


}
else if(productoArray._idProducto == 2){
    img.src ='../images/cafe.jpg'
}


 divModal.style.display= 'block';

 divModal.innerHTML = modalHtml;
 let divImg = divModal.querySelector('#imgProducto')

 divImg.appendChild(img);
 




}

selectDivModal(productoArray){
    switch(productoArray[0]._idProducto ){

        case 0:
            return '#modalPapas';
            break;
        case 1: 
            return '#modalPastel';
            break;
        default:
            return '#modalCafe';
            break
    }


}

}
customElements.define('tienda-main-page',TiendaMainPage);

