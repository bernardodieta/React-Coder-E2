import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import listaProductos from "../data";

function Producto(){

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId )

    const { image , title , price,description } = producto;

    return (
        <div className="galeria">
            <img src={image} alt={description}/>
            <h1>{title}</h1>
            <h2>Precio: {price}</h2>
            <Link to="/productos">Volver</Link>
        </div>        
    )
}


export default Producto;