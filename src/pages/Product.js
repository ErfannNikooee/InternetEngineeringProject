import { Link } from "react-router-dom";
// import cartimage from "../assets/cart.png";
import { useDispatch } from "react-redux";
import "./styles/Product.css"

export default function Product(props){
    // console.log(props.product);
    const {id, battery_capacity, img, resolution, name} = props.product;

    return (
        <div className="card">
            <div className="image-container">
                <img src={img} alt={name}/>
            </div>
            <div className="card-body">
                <Link to={'/products/'+id} >
                    <h2>{name}</h2>
                </Link>
                <div className="info">
                    <p>R$ {battery_capacity}</p>
                    <p>{resolution}</p>
                </div>
                <button className="addtofav">
                    <div>
                        <h3>افزودن به لیست محبوب ها</h3>
                        {/* <img src={cartimage} alt='cartimage'/> */}
                    </div>
                </button>
            </div>
        </div>
    )
}