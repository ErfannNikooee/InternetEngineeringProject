import Navbar from "../components/Navbar";
import styles from './styles/ProfilePage.module.css'
import {useDispatch, useSelector} from 'react-redux';
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import FavProduct from "../components/FavProduct";
import { Link, Navigate, useNavigate } from "react-router-dom";
import StoreModal from "../components/StoreModal";
import SupplierService from '../services/supplier.service'
import userService from "../services/user.service";


export default function ProfilePage(){

    const categories = require('../components/categories.json')[0].sub_dirs
    let [favourites,setFavourites] = useState([])
    let [lastVisited,setLastVisited] = useState([])
    let [stores,setStores] = useState([])
    let [isOpen, setIsOpen] = useState(false);

    let navigate = useNavigate()

    const user = useAuth()
    console.log(user)

    useEffect(() => {
        setFavourites(userService.getFavourites())
    },[])

    useEffect(() => {
        let vis = JSON.parse(localStorage.getItem("last_visited"))
        if (vis == null){
            vis = []
        }
        setLastVisited(vis)
    },[])

    useEffect(() => {
        if(user && user.user && user.user.role === 3){
            SupplierService.GetStores(user.user.id).then(res => {
                console.log("stores -> ",user.user.id)
                setStores(res)
            })
        }
    },[user])

    async function addStore (name,website,city) {
        console.log(user.user.id)
        SupplierService.AddStore(user.user.id, name, website,city)  
            .then(res => {
                console.log("store added", res)
                //setIsOpen(false)
                navigate(0)
            }).catch(err => {
                console.log("store add error -> ",err)
            })
    }

    let renderStores = () => {
        if (user.user.role === 3){
            return(
                <div className={styles.stores_container}>
                    <p className={styles.store_title}>فروشگاه های من</p>
                    <div className={styles.store_list_container}>
                        {stores.map(store => (
                            <div className={styles.store}>
                                <div className={styles.field}>
                                    <p>نام فروشگاه :</p> 
                                    <Link to={"/stores/"+store.storeId}>
                                        <span>{store.storeName}</span>
                                    </Link>
                                </div>
                                <div className={styles.field}>
                                    <p>شهر :</p> 
                                    <span>{store.city}</span>
                                </div>
                                <div className={styles.field}>
                                    <p>آدرس فروشگاه :</p> 
                                    <span>
                                        <a href={"https://"+store.storeUrl}>
                                            {store.storeUrl}
                                        </a> 
                                    </span>
                                </div>
                            </div>
                        ))}
                    <button className={styles.addBtn}onClick={() => setIsOpen(!isOpen)}>
                        <p>افزودن</p>
                    </button> 
                    <StoreModal isOpen={isOpen} 
                                onSubmit={(name,website,city) => addStore(name,website,city)} 
                                closeModal={() => setIsOpen(false)}/>   
                    </div>
                </div>
            )
        }else{
            return null
        }
    }

    let accessLevels = {
        0:"نامشخص",
        1:"معمولی",
        2:"ادمین",
        3:"صاحب فروشگاه"
    }
    console.log(accessLevels[0])
    
    return (
        <div className={styles.container}>
            <Navbar links={categories}/>
            <div className={styles.profile_page}>
                <div className={styles.user_details}>
                    <p>نام کاربری : <span>{user.user.username}</span></p>
                    <p>نام : <span>{user.user.fullname}</span></p>
                    <p>سطح دسترسی: <span>{accessLevels[user.user.role]}</span></p>
                </div>
                {renderStores()}
                <p className={styles.list_header}>لیست علاقه مندی ها</p>
                <div className={styles.list_container}>
                    {favourites.map(fav => (
                        <Link to={"/products/" + fav.id}>
                            <div className={styles.item_container}>
                                <FavProduct
                                    product={fav}
                                    />
                            </div>
                        </Link>
                    ))}
                </div>
                <p className={styles.list_header}>لیست بازدیدهای اخیر</p>
                <div className={styles.list_container}>
                    {lastVisited.map(prod => (
                        <Link to={"/products/" + prod.id}>
                            <div className={styles.item_container}>
                                <FavProduct
                                    product={prod}
                                    />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}