import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import productService from "../services/product.service";
import SupplierService from '../services/supplier.service'
import styles from './styles/StorePage.module.css'

export default function StorePage(){
    const {storeId} = useParams()
    const categories = require('../components/categories.json')[0].sub_dirs
    const user = useAuth();

    let [store,setStore] = useState({})
    let [products,setProducts] = useState([])

    useEffect(() => {
        console.log('calling getstoreinfo')
        SupplierService.GetStoreInfo(storeId).then(data => {
            console.log("store -> ",store)
            setStore(data)
        })
    },[])

     async function getProduct(offer){
        try {
            const res = await productService.getProduct(offer.productId);
            res.price = offer.price;
            res.url = offer.url;
            res.description = offer.description;
            console.log(res);
            return res;
        } catch (err) {
            console.log("error");
        }
    }

    useEffect(() => {
        console.log("calling getprod" , store)
        if(store.offers){
            let newProds = []
            let prods = store.offers
            prods = prods.forEach(async p => {
                let newProd = await getProduct(p)
                console.log(newProd)
                newProds.push(newProd)
            })
            console.log(newProds)
            setProducts(newProds)
        }
    },[store])

    useEffect(() => {
        console.log(products)
    },[products])

    return (
        <div>
            <Navbar links={categories} />
            <div className={styles.container}>
                <div className={styles.storeInfo}>
                    <h2 className={styles.storeName}>{store.storeName}</h2>
                    <p className={styles.storeCity}>{store.city}</p>
                </div>
                <div className={styles.products}>
                    <h3>محصولات فروشگاه</h3>
                    <div className={styles.products_list}>
                        {products.map(prod => (
                            <div className={styles.product_card}>
                                <div className={styles.image_container}>
                                    <img src={prod.image_url}/>
                                </div>
                                <a className={styles.product_name} href={prod.url}>
                                    <h4>{prod.name}</h4>
                                </a>
                                <div>{Number(prod.price).toLocaleString('ar-EG')} تومان</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}