import {useState} from "react";
import './Agregar.css'

const Agregar = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    let id = 1;
    if (parseInt(localStorage.getItem("lastId")) !== 1) {
        id = parseInt(localStorage.getItem("lastId"))
    }
    /*let id = parseInt(localStorage.getItem("lastId")) !== 0
    ? parseInt(localStorage.getItem("lastId"))
    : 1;*/
    /*const [id, setId] = useState(
    parseInt(localStorage.getItem("lasId")) !== 0
    ? parseInt(localStorage.getItem("lasId"))
    : 1);*/
    let products = [];
    if (JSON.parse(localStorage.getItem("products")).length > 0 ) {
        products += JSON.parse(localStorage.getItem("products"))
    }
    /*let products = JSON.parse(localStorage.getItem("products")).length > 0 
    ? JSON.parse(localStorage.getItem("products"))
    : [];*/
    /*const [products, setProducts] = useState(JSON.parse(
    localStorage.getItem("products")).length > 0 ?
    JSON.parse(localStorage.getItem("products")).length
    : []);*/

    const addProduct = (event) => {
        event.preventDefault();
        products.push({name: name, amount: amount, price: price, id: id});
        id++;
        document.querySelector("#name").value = "";
        document.querySelector("#amount").value = "";
        document.querySelector("#price").value = "";
    }

    console.log(id)
    console.log(products)
    localStorage.setItem("lastId", id);
    localStorage.setItem("products", JSON.stringify(products));

    return (
        <div className='container mt-4'>
            <h2>Agregar producto</h2>

            <form onSubmit={(event) => addProduct(event)}>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input id="name" type="text" className="form-control" onChange={((event) => setName(event.target.value))}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input id="amount" type="number" className="form-control" min="0" onChange={((event) => setAmount(event.target.value))}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input id="price" type="number" className="form-control" min="0" onChange={((event) => setPrice(event.target.value))}/>
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
        </div>
    );
}
 
export default Agregar;