import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/torob_logo.svg';
import magnifier from '../assets/search.svg';
import close from '../assets/close.svg';
import open from '../assets/open.png';
import closed from '../assets/closed.png';
import './css/Home.css';
import Modal from 'react-modal'
import Input from './input'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_EMAIL
} from './validators';

Modal.setAppElement("#root");

const Home = () => {

    const [isOpen, setIsopen] = useState(false);

    const [eye, eyestatus] = useState(open);

    const [login, setlogin] = useState(false)

    const [emaildisplay, setdisplay] = useState("block")

    const [modalCategory, setstatus] = useState(false);

    function toggleModal() {
        setIsopen(!isOpen);
    }

    const [showPass, setShow] = useState("password");

    function toggleShowpass() {
        if (showPass === "password") {
            setShow("text")
            eyestatus(closed);
        }
        else {
            setShow("password")
            eyestatus(open)
        }
    }



    function signlog() {
        var x = document.getElementById("signbtn")
        var y = document.getElementById("changesign")
        if (y && x) {
            console.log(login);
            if (!login) {
                x.innerHTML = "ورود";
                y.innerHTML = "حساب کاربری جدید می‌سازم";
                setdisplay("none")
                // e.style.display = "none"
            }
            else {
                x.innerHTML = "ثبت نام";
                y.innerHTML = "حساب کاربری دارم";
                setdisplay("block")
                // e.style.display = "block"
            }
            setlogin(!login);
        }
    }

    function mobile() {
        return <div>
            <h3>:گوشی موبایل</h3>
            <ul id='mobilelist'>
                <li>گوشی سامسونگ</li>
                <li>گوشی شیائومی</li>
                <li>گوشی اپل</li>
            </ul>
            <h3>:تبلت</h3>
            <ul id='mobilelist'>
                <li>تبلت  سامسونگ</li>
                <li>تبلت شیائومی</li>
                <li>تبلت اپل</li>
            </ul>
        </div>
    }

    function laptop() {
        return <div>
            <h3>لپتاپ:</h3>
            <ul id='mobilelist'>
                <li>لپ‌تاپ سامسونگ</li>
                <li>لپ‌تاپ شیائومی</li>
                <li>لپ‌تاپ اپل</li>
            </ul>
        </div>
    }

    function categoryModal(props) {
        var modalstatus = props.mobile
        if (modalstatus) {
            return <mobile />
        }
        return <laptop />
    }

    const modalroot = ReactDOM.createRoot(document.getElementById('categorymodal'));

    function modalCategoryhandler(status) {
        if(status){
            setstatus(!modalCategory)
            if(status==='mobile'){
                modalroot.render(<categoryModal mobile={true} />)
            }
            else{
                modalroot.render(<categoryModal mobile={false} />)
            }
        }
    }

    

    return (
        <div className='Homepage'>
            <nav className='navbar'>
                <div>
                    <button className='login' onClick={toggleModal}>
                        ورود / ثبت نام
                    </button>
                    <Modal
                        portalClassName="modal"
                        isOpen={isOpen}
                        onRequestClose={toggleModal}
                        style={{
                            overlay: {
                                position: 'fixed',
                                backgroundColor: 'rgba(0, 0, 0, .5)',
                                zIndex: "9999"
                            },
                            content: {
                                position: 'absolute',
                                border: '1px solid #ccc',
                                background: '#fff',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                textAlign: "center",
                                borderRadius: '4px',
                                margin: " 40px auto",
                                outline: 'none',
                                padding: '20px',
                                width: '500px',
                                height: '500px'
                            }
                        }}
                    >
                        <div className='modalheader'>
                            <div>
                                <button className='closebtn' onClick={toggleModal}>
                                    <img src={close} alt='close' />
                                </button>
                            </div>
                            <h3> ورود یا ثبت نام</h3>
                        </div>
                        <div className='modalcontainer' id='modalcontainer'>
                            <Input
                                type="text"
                                label="نام کاربری"
                                id="username"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText=".این نام کاربری قبلا استفاده شده است"
                            />
                            <div className='btn'>
                                <label htmlFor="chk">
                                    <img src={eye} alt="searchicon" className='eye' />
                                </label>
                            </div>

                            <Input
                                type={showPass}
                                label="رمز ورود"
                                id="password"
                                validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_PASSWORD()]}
                                errorText="رمز باید حداقل دارای 8 حرف و شامل یک حرف بزرگ یک حرف کوچک و یک عدد باشد "
                            />
                            <input className='visiblity' type="checkbox" id="chk" onClick={toggleShowpass} />
                            <div style={{ display: emaildisplay }}>
                                <Input
                                    type="text"
                                    label="ایمیل"
                                    id="email"
                                    validators={[VALIDATOR_EMAIL()]}
                                    errorText=".این ایمیل معتبر نیست"
                                />
                            </div>

                        </div>

                        <div>
                            <button id="signbtn" >
                                ثبت نام
                            </button>
                            <p id='changesign' onClick={signlog} > حساب کاربری دارم </p>
                        </div>

                    </Modal>
                </div>
                <div>
                    <button className='category' onClick={modalCategoryhandler('laptop')}>
                        لپ‌تاپ
                    </button>
                    <button className='category' onClick={modalCategoryhandler('mobile')}>
                        موبایل و تبلت
                    </button>
                    <Modal
                        portalClassName="modal"
                        id='categorymodal'
                        isOpen={isOpen}
                        onRequestClose={modalCategoryhandler}
                        style={{
                            overlay: {
                                position: 'fixed',
                                backgroundColor: 'rgba(0, 0, 0, .5)',
                                zIndex: "9999"
                            },
                            content: {
                                position: 'absolute',
                                border: '1px solid #ccc',
                                background: '#fff',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                textAlign: "center",
                                borderRadius: '4px',
                                margin: " 40px auto",
                                outline: 'none',
                                padding: '20px',
                                width: '500px',
                                height: '500px'
                            }
                        }}
                    ></Modal>
                </div>
            </nav>
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