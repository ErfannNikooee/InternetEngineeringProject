import React from 'react';
import logo from '../assets/torob_logo.svg'
import './css/Home.css'

const Home = () => {

    return (
        <div className='Homepage'>
            <nav className='navbar'>
                <div>
                    <button className='login'>
                        ورود / ثبت نام
                    </button>
                </div>
                <div>
                    <button className='category'>
                        لپ‌تاپ
                    </button>
                    <button className='category'>
                        موبایل و تبلت
                    </button>
                </div>
            </nav>
            <div className='container'>
                <div className='title'>
                    <div className='logo'>
                        <img src={logo} alt='torob-logo' />
                    </div>
                    <h1>
                        ترب
                    </h1>
                    <span>
                        موتور جستجوی هوشمند خرید
                    </span>
                </div>
                <div className='search'>
                    <input type="text" class="searchbar" placeholder="نام کالا را وارد کنید" />
                </div>
            </div>

        </div>
    )
}

export default Home;