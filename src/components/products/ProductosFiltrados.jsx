import { TarjetaProductos } from "./TarjetaProductos";

export function ProductosFiltrados({productos, filtros}){

    console.log('Filtros recibidos: ', filtros);
    console.log('Productos recibidos: ', productos);
    const filtrados = productos.filter((producto)=>{
        console.log('Evaluando producto: ', producto);
        const marcaOk = filtros.marca ? producto.marca === filtros.marca : true;
        const tallaOk = filtros.talla_elegido ? producto.talla.includes(filtros.talla_elegido)  : true;
        const colorOk = filtros.color_elegido ? producto.color === filtros.color_elegido : true;
        const precioOk = producto.precio >= Number(filtros.precio_min) && producto.precio <= Number(filtros.precio_max);
        
        return marcaOk && tallaOk && colorOk && precioOk;
    });

    return(
        <>
            <h3>Productos encontrados: {filtrados.length}</h3>
            {filtrados.map((filt)=>{
                return <TarjetaProductos key={filt.id} producto = {filt}/>
            })}
        </>
    )
}