import {useState} from "react";
import {useEffect} from "react";
import { Link } from 'react-router-dom';
import './Productos.css'
import trash from "../../img/trash-fill.svg"

const Agregar = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        if (localStorage.getItem("products") !== null) {
            setProducts(JSON.parse(localStorage.getItem("products")))
        }
    }, [])
    useEffect (() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products])

    const deleteLocalStorage = () => {
        setProducts([]);
        localStorage.clear();
    }
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id != id));
    }

    return (
        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            <button className="btn btn-danger" onClick={() => deleteLocalStorage()}>Eliminar todo</button>
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
                    <div className='col-2'>${product.amount}</div>
                    <div className='col-2'>${product.price * product.amount}</div>
                    <img className="col-1 trash" src={trash} alt="Delete" onClick={() => deleteProduct(product.id)}></img>           
                </div>)}
            </div>
        </div>
    );
}
 
export default Agregar;