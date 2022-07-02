import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/product.service";
import Navbar from '../components/Navbar';
import styles from './styles/ProductDetails.module.css';

export default function ProductDetails() {

    ///////for test:
    const { productId } = useParams()
    const categories = require('../components/categories.json')[0].sub_dirs
    /////////////////////////
    // const [product,setProduct] = useState()
    // const [offers, setOffers] = useState([])

    // useEffect(() => {
    //     productService.getProduct(productId).then(res => {
    //         if (res.data){
    //             setProduct(res.data)
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },[])
    // useEffect(() => {
    //     productService.GetProductOffers(productId).then(res => {
    //         if (res.data){
    //             setOffers(res.data)
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // },[product])

    const data = require('../components/data.json').data[productId]
    console.log(data);

    return (
        <div>
            <Navbar links={categories} />
            <div className={styles.detailspage}>
                <div className={styles.product_container}>
                    <div className={styles.product} >
                        <div className={styles.productimg}>
                            <img src={data.img} alt="product-image" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <h1> {data.name}</h1>
                            </div>
                            <div className={styles.price_range}>
                                <h2> از 5000 تومان تا 10,000 تومان</h2>
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
                        <h1>مشخصات {data.name}</h1>
                        <div>
                            <h2 className={styles.detailsheader}>مشخصات کلی</h2>
                            <h2>{data.detail}</h2>
                            <h2>{data.battery_capacity}</h2>
                            <h2>{data.resolution}</h2>
                        </div>
                    </div>
                    <div className={styles.offers_container}>
                        <h1>فروشگاه های اینترنتی</h1>
                        <div className={styles.offerlist}>
                            {/* map here */}
                            <div className={styles.offer_card}>
                                <div className={styles.store}>
                                    <h2>تکنولایف</h2>
                                    <p>تهران</p>
                                </div>
                                <div className={styles.store_info}>
                                    <h2>توضیحات</h2>
                                    <div>لینک</div>
                                </div>
                                <div className={styles.purchase}>
                                    <div className={styles.price}>5000 تومان</div>
                                    <button className={styles.buy}>خرید</button>
                                    <button className={styles.report}>گزارش</button>
                                </div>
                            </div>
                            

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