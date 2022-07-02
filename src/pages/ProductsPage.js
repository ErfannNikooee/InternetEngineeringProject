import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productService from "../services/product.service";
import Navbar from '../components/Navbar';
import styles from './styles/Productspage.module.css'
import Product from "./Product";
import authService from "../services/auth.service";
import {useSelector,useDispatch} from "react-redux";
import { setUser,clearUser } from "../features/user/userSlice";
import useAuth from "../hooks/useAuth";
import userService from "../services/user.service";

export default function ProductsPage() {
    const { category } = useParams()
    const [products, setProducts] = useState([])


    //const data = require('../components/data.json').data
    const categories = require('../components/categories.json')[0].sub_dirs

    const user = useAuth()

    useEffect(() => {
        productService.getProductByType(category).then(res => {
            if(res.data){
                setProducts(res.data)
            }else{
                setProducts([])
            }
        }).catch(err => {
            console.log("error fetching data")
        })
    },[category])


    return (

        <div className="ProductsPage">
            <Navbar links={categories} />
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <h2 className={styles.results}>نتایج جستجو</h2>
                    <div className={styles.products}>
                        {products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                addHandler={(p) => userService.addToFavorites(p)}
                            />
                        ))}
                    </div>
                </div>


                <div className={styles.right_container}>

                    <div className={styles.subcat}>
                        <h2> دسته ها</h2>
                        {categories.map(link => (
                            <div>
                                <Link to={"/browse/" + link.name}
                                style={{ textDecoration: 'none',color:'inherit' }}    
                                >
                                    <p>{link.description}</p>
                                </Link>
                                <ul className={styles.link_lists}>
                                    {link.sub_dirs.map(subsublink => (
                                        <li>
                                            <Link to={"/browse/" + subsublink.name}
                                            style={{ textDecoration: 'none',color:'inherit' }}
                                            >
                                                {subsublink.description}
                                            </Link>
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