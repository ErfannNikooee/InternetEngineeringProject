import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/product.service";
import Navbar from '../components/Navbar';
import styles from './styles/ProductDetails.module.css';
import useAuth from "../hooks/useAuth";

export default function ProductDetails() {

    ///////for test:
    const { productId } = useParams()
    const categories = require('../components/categories.json')[0].sub_dirs
    /////////////////////////
    const [product,setProduct] = useState({})
    const [offers, setOffers] = useState([])

    const user = useAuth()

    useEffect(() => {
        console.log("called useeffect")
        productService.getProduct(productId).then(data => {
            console.log("products -> ",data)
            setProduct(data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    useEffect(() => {
        productService.GetProductOffers(productId).then(data => {
            console.log("offers ->> ",offers)
            setOffers(data)
        }).catch(err => {
            console.log(err)
        })
    },[product])

    //const data = require('../components/data.json').data[productId]
   // console.log(data);

    let fields = (p) => {
        let {id,category,image_url,min_price,name,...fields} = p
        return fields
    }

    return (
        <div>
            <Navbar links={categories} />
            <div className={styles.detailspage}>
                <div className={styles.product_container}>
                    <div className={styles.product} >
                        <div className={styles.productimg}>
                            <img src={product.image_url} alt="product-image" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <h1> {product.name}</h1>
                            </div>
                            <div className={styles.price_range}>
                                <h2>از {product.min_price} تومان</h2>
                            </div>
                        </div>



                        {/* {Object.keys(product).map(key => (
                                 <span key={key}>
                                 {product[key]}
                                 </span>
                            ))} */}

                    </div>
                </div>
                {/* <br /> */}
                <div className={styles.bottem_container}>

                    <div className={styles.details}>
                        <h1>مشخصات {product.name}</h1>
                        <div>
                            <h2 className={styles.detailsheader}>مشخصات کلی</h2>
                            {Object.keys(fields(product)).map(key => (
                                 <div className={styles.field} key={key}>
                                    <div className={styles.field_title}>
                                        {key}
                                    </div>
                                    <div className={styles.field_value}>
                                        {fields(product)[key]}
                                    </div>
                                 </div>
                            ))}
                            {/* <h2>{data.detail}</h2>
                            <h2>{data.battery_capacity}</h2>
                            <h2>{data.resolution}</h2> */}
                        </div>
                    </div>
                    <div className={styles.offers_container}>
                        <h1>فروشگاه های اینترنتی</h1>
                        <div className={styles.offerlist}>
                            {offers.map(offer => (
                                <div className={styles.offer_card}>
                                    <div className={styles.store}>
                                        <div className={styles.prod_desc}>
                                            <h2>{offer.prodDesc}</h2>
                                        </div>
                                        <h2>{offer.storeName}</h2>
                                        <p>{offer.storeCity}</p>
                                    </div>
                                    
                                    <div className={styles.purchase}>
                                        <div className={styles.price}>{offer.price} تومان</div>
                                            <button className={styles.buy}>
                                                <a href={offer.url}>خرید</a>
                                            </button>
                                        <button className={styles.report}>گزارش</button>
                                    </div>
                            </div>
                            ))}
                            

                            {/* {offers.map(o => (
                                <div>
                                    <div>{o.storeName}</div>
                                    <div>{o.storeCity}</div>
                                    <div>{o.price}</div>
                                    <div>{o.prodDesc}</div>
                                    <div>{o.url}</div>
                                </div>
                            ))} */}
                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}