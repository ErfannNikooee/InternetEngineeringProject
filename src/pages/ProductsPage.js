import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/product.service";
import Navbar from '../components/Navbar';
import styles from './styles/Productspage.module.css'
import Product from "./Product";


export default function ProductsPage() {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    ///////////
    const data = require('../components/data.json').data
    const categories = require('../components/categories.json')[0].sub_dirs
    console.log(categories);
    ///////////////////////////
    // useEffect(() => {
    //     productService.getProductByType(category).then(res => {
    //         if(res.data){
    //             console.log(res.data)
    //             setProducts(res.data)
    //         }else{
    //             console.log("no res.data")
    //         }
    //     }).catch(err => {
    //         console.log("error fetching data")
    //     })
    // },[category])

    // useEffect(() =>{
    //     console.log("products: ",products)
    // })

    return (

        <div className="ProductsPage">
            <Navbar links={categories} />
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <h2 className={styles.results}>نتایج جستجو</h2>
                    <div className={styles.products}>
                        {data.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>


                <div className={styles.right_container}>

                    <div className={styles.subcat}>
                        <h2> دسته ها</h2>
                        {categories.map(obj => (
                            <div>
                                <p>{obj.description}</p>
                                <ul className={styles.link_lists}>
                                    {obj.sub_dirs.map(subsublink => (
                                        <li>
                                            {subsublink.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.prices}>
                        <h2>قیمت</h2>
                        <div className={styles.priceinput}>
                            <div className={styles.inputholder}>
                                <span>از</span>
                                <input></input>
                            </div>
                            <div className={styles.inputholder}>
                                <span>تا</span>
                                <input></input>
                            </div>
                        </div>
                        <div className={styles.applyprice}>
                            <button> اعمال قیمت</button>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <h2>فیلتر ها</h2>
                        <div>
                            <p>جدید ترین ها</p>
                            <p>ارزان ترین ها</p>
                            <p>گران ترین ها</p>
                        </div>
                    </div>
                    {/* {data.map(prod => (
                        <div>
                            <p>{prod.name}</p>
                            <p>{prod.category}</p>
                            <p>{prod.resolution}</p>
                            <p>{prod.battery_capacity}</p>
                            <p>{prod.weight}</p>
                        </div>
                    ))} */}
                </div>
            </div>


        </div>
    )
}