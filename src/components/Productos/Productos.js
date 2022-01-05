import {useState} from "react";
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import './Productos.css'

const Agregar = () => {
    const [products, setName] = useState([]);

    useEffect (() => {
        setName(JSON.parse(localStorage.getItem("products")))
    }, [])

    return (
        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            <button className="btn btn-danger">Eliminar todo</button>

            <div className='row border-top border-bottom mt-4 p-2'>
                <div className='col-2 fw-bolder'>#</div>
                <div className='col-5 fw-bolder'>Nombre del producto</div>
                <div className='col-2 fw-bolder'>Cantidad</div>
                <div className='col-2 fw-bolder'>Precio</div>
                <div className='col-1 fw-bolder'>Acción</div>
            </div>
            <div>
            {products.map(product =>  
            <div className='row border-top border-bottom mt-3 p-2' key={product.id}>
                <div className='col-2'>{product.id}</div>
                <div className='col-5'>{product.name}</div>
                <div className='col-2'>{product.amount}</div>
                <div className='col-2'>{product.price * product.amount}</div>
                <div className='col-1'>Acción</div>
            </div>)}
            </div>
        </div>
    );
}
 
export default Agregar;