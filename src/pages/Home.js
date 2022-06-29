import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/torob_logo.svg';
import magnifier from '../assets/search.svg';
import Modal from 'react-modal'
import Navbar from '../components/Navbar';
import './styles/Home.css';
Modal.setAppElement("#root");

const Home = () => {

    return (
        <div className='Homepage'>
            <Navbar/>
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

export default Home;