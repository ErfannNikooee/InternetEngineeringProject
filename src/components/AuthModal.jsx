import React, { useEffect,useState } from 'react';
import styles from './css/AuthModal.module.css'
import Modal from 'react-modal'
import Input from './input'
import close from '../assets/close.svg';
import open from '../assets/open.png';
import closed from '../assets/closed.png';
import AuthService from '../services/auth.service'
import {useNavigate} from 'react-router-dom'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_EMAIL
} from './validators';

export default function AuthModal({isOpen,closeModal}){
    const [eye, eyestatus] = useState(open);
    const [isLogin,setIsLogin] = useState(true)
    const [showPass, setShow] = useState("password");
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")
    let [email,setEmail] = useState("")

    let [errorMsg,setErrorMsg] = useState(null)

    let navigate = useNavigate()

    useEffect(() => {
        setErrorMsg(null)
    },[isLogin])

    const handleAuth = () => {
        // console.log("before resetting")
        // setErrorMsg(null)
        // console.log("after resetting")
        if (isLogin){
            loginHandler().then(res => {
                console.log(res)
                navigate(0)
            }).catch(err => {
                setErrorMsg("مجدد تلاش کنید")
            })
        }else{
            signupHandler().then(res => {
                //navigate(0)
                console.log(res)
            }).catch(err => {
                setErrorMsg("مجدد تلاش کنید")
            })
        }
    }

    function loginHandler () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        return AuthService.login(username,password).then(res => {
            console.log("login success", res)
        }).catch(err => {
            console.log(err.response)
            throw err
        })
    }
    function signupHandler(){
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        return AuthService.register(email,username,password).then(res => {
            console.log("register ok , ",res)
        }).catch(err => {
            console.log("register failed")
            throw err
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
                    validators={
                        isLogin ? []
                                 : [VALIDATOR_MINLENGTH(8), VALIDATOR_PASSWORD()]
                        
                    }
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
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
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