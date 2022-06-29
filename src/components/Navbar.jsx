import React, { useEffect, useState } from 'react';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_EMAIL
} from './validators';
import styles from './css/Navbar.module.css'
import Modal from 'react-modal'
import Input from './input'
import close from '../assets/close.svg';
import open from '../assets/open.png';
import closed from '../assets/closed.png';

export default function Navbar(){

    useEffect(() => {
        console.log("isopne is :",isOpen)
    })

    const [isOpen, setIsopen] = useState(false);
    const [login, setlogin] = useState(false)
    const [emaildisplay, setdisplay] = useState("block")
    const [showPass, setShow] = useState("password");
    const [eye, eyestatus] = useState(open);

    const [modalCategory, setstatus] = useState(false);

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


    function toggleModal() {
        setIsopen(!isOpen);
    }

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

    return (
        <nav className={styles.navbar}>
                <div>
                    <button className={styles.login} onClick={toggleModal}>
                        ورود / ثبت نام
                    </button>
                    <Modal
                        portalClassName="modal"
                        isOpen={isOpen}
                        //onRequestClose={toggleModal}
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
                        <div className={styles.modalheader}>
                            <div>
                                <button className={styles.closebtn} onClick={toggleModal}>
                                    <img src={close} alt='close' />
                                </button>
                            </div>
                            <h3> ورود یا ثبت نام</h3>
                        </div>
                        <div className={styles.modalcontainer} id={styles.modalcontainer}>
                            <Input
                                type="text"
                                label="نام کاربری"
                                id="username"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText=".این نام کاربری قبلا استفاده شده است"
                            />
                            <div className={styles.btn}>
                                <label htmlFor="chk">
                                    <img src={eye} alt="searchicon" className={styles.eye} />
                                </label>
                            </div>

                            <Input
                                type={showPass}
                                label="رمز ورود"
                                id="password"
                                validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_PASSWORD()]}
                                errorText="رمز باید حداقل دارای 8 حرف و شامل یک حرف بزرگ یک حرف کوچک و یک عدد باشد "
                            />
                            <input className={styles.visiblity} type="checkbox" id="chk" onClick={toggleShowpass} />
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
                            <button id={styles.signbtn} >
                                ثبت نام
                            </button>
                            <p id={styles.changesign} onClick={signlog} > حساب کاربری دارم </p>
                        </div>

                    </Modal>
                </div>
                <div className={styles.links}>
                    <div className={styles.dropdown}>
                        <button class={styles.dropbtn}> لپ‌تاپ
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className={styles.dropdown_content}>
                            <a href="#">لپتاپ لنوو</a>
                            <a href="#">لپتاپ ایسوس</a>
                            <a href="#">لپتاپ اپل</a>   
                        </div>    
                    </div>
                    <div className={styles.dropdown}>
                        <button class={styles.dropbtn}> موبایل و تبلت
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className={styles.dropdown_content}>
                            <a href="#">گوشی سامسونگ</a>
                            <a href="#">گوشی شیائومی</a>
                            <a href="#">گوشی اپل</a>   
                        </div>    
                    </div>
                    
                </div>
            </nav>
    )
}