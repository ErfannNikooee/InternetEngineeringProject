import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import productService from "../services/product.service";

export default function ProductDetails(){
    const {productId} = useParams()
    const [product,setProduct] = useState()
    const [offers, setOffers] = useState([])

    useEffect(() => {
        productService.getProduct(productId).then(res => {
            if (res.data){
                setProduct(res.data)
            }
        }).catch(err => {
            console.log(err)
        })
    },[])
    useEffect(() => {
        productService.GetProductOffers(productId).then(res => {
            if (res.data){
                setOffers(res.data)
            }
        }).catch(err => {
            console.log(err)
        })
    },[product])

    return (
        <div>
            <div>
                <div>product</div>
                <div>
                {Object.keys(product).map(key => (
                    <span key={key}>
                    {product[key]}
                    </span>
                ))}
                    
                </div>
            </div>
            <br/>
            <div>
                <div>OFFERS</div>
                {offers.map(o => (
                    <div>
                        <div>{o.storeName}</div>
                        <div>{o.storeCity}</div>
                        <div>{o.price}</div>
                        <div>{o.prodDesc}</div>
                        <div>{o.url}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}