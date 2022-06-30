import React, { useEffect,useState } from 'react';
import styles from './css/AuthModal.module.css'
import Modal from 'react-modal'
import Input from './input'
import close from '../assets/close.svg';
import open from '../assets/open.png';
import closed from '../assets/closed.png';
import AuthService from '../services/auth.service'
import {useLocation} from 'react-router-dom'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_EMAIL
} from './validators';

export default function AuthModal({isOpen,closeModal,location}){
    const [eye, eyestatus] = useState(open);
    const [isLogin,setIsLogin] = useState(true)
    const [showPass, setShow] = useState("password");

    const history = useLocation()
    console.log("history: ",history)

    useEffect(() => {
        console.log(isOpen)
    },[isOpen])

    const handleAuth = () => {
        if (isLogin){
            loginHandler()
        }else{
            signupHandler()
        }
    }

    function loginHandler () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        AuthService.login(username,password).then(res => {
            console.log("login success")
        }).catch(err => {
            console.log("login failed")
        })
    }
    const signupHandler = () => {
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        AuthService.register(email,username,password).then(res => {
            console.log("register ok")
        }).catch(err => {
            console.log("register failed")
        })
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

    return(
        <Modal
            portalClassName="modal"
            isOpen={isOpen}
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
                    height: '510px'
                }
            }}
        >
            <div className={styles.modalheader}>
                <div>
                    <button className={styles.closebtn} onClick={closeModal}>
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
                <div style={{ display: isLogin ? "none" : "block" }}>
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
                <button id='signbtn' onClick={handleAuth} >
                    {isLogin ? "ورود" : "ثبت نام"}
                </button>
                <p id='changesign' onClick={() => setIsLogin(!isLogin)} > 
                    {isLogin ? "ساخت حساب جدید" : "حساب کاربری دارید؟ وارد شوید"}
                </p>
            </div>
        </Modal>
    )
}