
export class Producto{
 
    constructor(idProducto,nombreProducto,costoProducto,fechaCompra){

    this._idProducto = idProducto;
    this._nombreProducto = nombreProducto;
    this._costoProducto = costoProducto;
    this._fechaCompra = fechaCompra;
   

    }




    get idProducto(){
        return this._idProducto
    }

    set idProducto(v_idProdutco){

        this._idProducto = v_idProdutco;
    }
    get nombreProducto(){
        return this._nombreProducto
    }

    set nombreProducto(v_nombreProducto){

        this._nombreProducto = v_nombreProducto;
    }
    get costoProducto(){
        return this._costoProducto
    }

    set costoProducto(v_costoProducto){

        this._costoProducto = v_costoProducto;
    }
    get fechaCompra(){
        return this._fechaCompra
    }

    set fechaCompra(v_fechaCompra){

        this._fechaCompra = v_fechaCompra;
    }


}