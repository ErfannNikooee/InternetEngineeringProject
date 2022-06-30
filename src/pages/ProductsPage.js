import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import productService from "../services/product.service";

export default function ProductsPage(){
    const {category} = useParams()
    const [products,setProducts] = useState([])

    useEffect(() => {
        productService.getProductByType(category).then(res => {
            if(res.data){
                console.log(res.data)
                setProducts(res.data)
            }else{
                console.log("no res.data")
            }
        }).catch(err => {
            console.log("error fetching data")
        })
    },[category])

    useEffect(() =>{
        console.log("products: ",products)
    })

    return (
        <div className="container">
            {products.map(prod => (
                <div>
                    <p>{prod.name}</p>
                    <p>{prod.category}</p>
                    <p>{prod.resolution}</p>
                    <p>{prod.battery_capacity}</p>
                    <p>{prod.weight}</p>
                </div>
            ))}
        </div>
    )
}