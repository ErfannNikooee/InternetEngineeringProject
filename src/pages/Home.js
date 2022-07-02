import React, { useEffect,useState } from 'react';
import logo from '../assets/torob_logo.svg';
import magnifier from '../assets/search.svg';
import Modal from 'react-modal'
import Navbar from '../components/Navbar';
import './styles/Home.css';
import {useSelector,useDispatch} from "react-redux";
import { setUser,clearUser } from "../features/user/userSlice";
import authService from "../services/auth.service";

import productService from '../services/product.service';
Modal.setAppElement("#root");

export default function Home () {

    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    useEffect(() =>{
        console.log("calling validate token")
        authService.validateToken().then(u => {
            console.log("validate token response: ",u)
            dispatch(setUser(u))
        }).catch(err => {
            console.log("user not logged in: ",err)
            dispatch(clearUser())
        })
    },[])

    const getCategories = () => {
        return fetch('static/categories.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(res => {
            return res.json()
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log("run")
        getCategories().then(res => {
            console.log(res[0])
            setCategories(res[0].sub_dirs)
        })
    },[])
    
    // useEffect(() => {
    //     productService.GetCategories().then(res => {
    //         console.log(res)
    //     })
    // },[])

    return (
        <div className='Homepage'>
            <Navbar links={categories}/>
            <div className='container'>
                <div className='title'>
                    <div className='name'>
                        <h1>
                            ترب
                        </h1>
                        <span>
                            موتور جستجوی هوشمند خرید
                        </span>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='torob-logo' />
                    </div>
                </div>
                <div className='search'>
                    <form method='get' action='/search/' id='searchFormInput' className='searchForm'>
                        <input type="text" className="searchbar" placeholder="نام کالا را وارد کنید" >
                        </input>
                        <div className='searchbtn'>
                            <img src={magnifier} alt="searchicon" className='searchicon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

