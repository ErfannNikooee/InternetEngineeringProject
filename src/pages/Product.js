import { Link } from "react-router-dom";
// import cartimage from "../assets/cart.png";
import { useDispatch } from "react-redux";
import "./styles/Product.css"

export default function Product(props){
    // console.log(props.product);
    const {product,addHandler} = props;
    // console.log(Number(product.min_price));

    return (
        <div className="card">
            <div className="image-container">
                <img src={product.image_url} alt={product.name}/>
            </div>
            <div className="card-body">
                <Link to={'/products/'+product.id} >
                    <h2>{product.name}</h2>
                </Link>
                <div className="info">
                    {/* <p>R$ {battery_capacity}</p>
                    <p>{resolution}</p> */}
                    <p>از {Number(product.min_price).toLocaleString('ar-EG')} تومان</p>
                </div>
                <button className="addtofav" onClick={() => addHandler(product)}>
                    <div>
                        <h3>افزودن به لیست محبوب ها</h3>
                        {/* <img src={cartimage} alt='cartimage'/> */}
                    </div>
                </button>
            </div>
        </div>
    )
}