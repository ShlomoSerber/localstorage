import {useState} from "react";
import './Agregar.css'

const Agregar = () => {
    let array = localStorage.getItem("products") !== null
    ? JSON.parse(localStorage.getItem("products"))
    : [];
    let firstId = localStorage.getItem("lastId") > 1
    ? localStorage.getItem("lastId")
    : 1;

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(firstId);
    const [products, setProducts] = useState(array);

    const addProduct = (event) => {
        event.preventDefault();
        setProducts([{name: name, amount: amount, price: price, id: id}, ...products]);
        setId(parseInt(id) + 1)
        document.querySelector("#name").value = "";
        document.querySelector("#amount").value = "";
        document.querySelector("#price").value = "";
    }

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