export class NavBarMenu extends HTMLElement{

 constructor(){
    super();
    this.render();
 }


 render(){
    this.innerHTML= /*html*/`
     <nav>
        <section class="container1" >
            <img id="logo" src="/images/logoWhite.png" alt="">          
                            <a class="alink" href="/index.html">Inicio</a> 
                            <a class="alink" href="/servicios/index.html">Servicios</a>
                            <a class="alink" href="/soporte/index.html">Soporte</a>           
        </section>
</nav>
    
    `




 }

}

customElements.define('nav-bar-menu',NavBarMenu);