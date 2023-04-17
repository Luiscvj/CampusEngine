import {Servicio} from '../db.js'

export class ServicioMainPage extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.evenMostrarModalBanios();
        this.evenMostrarModalOcatavo();
        this.eventMostrarModalCafeteria();
        this.eventMostrarModalHunters();
       
    }




    render(){

        this.innerHTML =  /*html*/`
        <section>
        <h1 class="first-message">Servicios</h1>
        <p class="homepage"><a href="../tiendaComida/index.html">Cafeteria Virtual</a></p>
    </section>


    <div id="contenedor-tarjetas"> 
          
        <div class="tarjetas">
            <p>Hunters</p>
            <img src="/images/hunters.png" alt="">
            <button id="btnDetalleHunters" name="0" >Ver detalle</button>
        </div>
        <div class="tarjetas">
            <p>Cafeteria Hunters</p>
            <img src="/images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg" alt="">
            <button id="btnDetalleCafeteria" name="1">Ver detalle</button>
        </div>
        <div class="tarjetas">
            <p>8vo Piso</p>
            <img src="/images/cafeteria 8vo.jpg" alt="">
            <button id="btnDetalleOctavo" name="2">Ver detalle</button>
        </div>
        <div class="tarjetas">
            <p>Baños</p>
            <img src="/images/aseo.png" alt="">
            <button id="btnDetalleBanios" name="3">Ver detalle</button>
        </div>
        
    </div>
        
        
        
        
        
        
        `

    }

mostrarModal = (servicio) =>
 { 
        let btnClose = document.querySelector('#btnClose');
        let divModal = document.querySelector('#modelTarjeta')
        let modalHtml = 
        
        
            /*html */`

         <div class="modal">   
             <div id="modal-contenido"> 
                        <table >
                    
                                <tr>
                                    <th>Nombre</th>
                                    <th>Detalle</th>
                                    <th>disponibilidad</th>
                                </tr>
                                <tr>
                    
                                    <td>${servicio.nombre}</td>
                                    <td>${servicio.detalle}</td>
                                    <td>${servicio.disponibilidad}</td>
                                </tr>
                       </table>
           
               
           
            <div>
            <button type="button" id="btnClose" class="close" >X</button>
        </div>
         `
        divModal.style.display='block'
        divModal.innerHTML = modalHtml
        this.evenQuitarModal();
          
        }

eventMostrarModalHunters(){
document.querySelector('#btnDetalleHunters').addEventListener('click', (e)=>{

            let data = Servicio.filter(servicioid=> servicioid.id == e.target.name)
           
            
            
            
         
             this.mostrarModal(data[0])
          
        })

    }


eventMostrarModalCafeteria(){
        document.querySelector('#btnDetalleCafeteria').addEventListener('click', (e)=>{
        
            let data = Servicio.filter(servicioid=> servicioid.id == e.target.name)
            
            console.log(data[0])
            
         
             this.mostrarModal(data[0]);
          
          });
        }
        


 evenMostrarModalOcatavo(){
            document.querySelector('#btnDetalleOctavo').addEventListener('click', (e)=>{
           
               let data = Servicio.filter(servicioid=> servicioid.id == e.target.name)
              
               
               console.log(data[0])
               
            
               this.mostrarModal(data[0]);
             
        })
    }




evenMostrarModalBanios(){
 
        document.querySelector('#btnDetalleBanios').addEventListener('click', (e)=>{
       
           let data = Servicio.filter(servicioid=> servicioid.id == e.target.name)
         
           
           console.log(data[0])
           
        
            this.mostrarModal(data[0]);
        })
       
       
    }

evenQuitarModal(){
    let divModal = document.querySelector('#modelTarjeta')
    
    document.querySelector('#btnClose').addEventListener('click', (e)=>{
            divModal.style.display = 'none';
            console.log('holaaa')
         



    })
}

}

customElements.define('servicio-main-page',ServicioMainPage);