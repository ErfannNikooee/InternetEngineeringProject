import styles from './css/AuthModal.module.css';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_PASSWORD,
    VALIDATOR_EMAIL
} from './validators';
import Modal from 'react-modal'
import Input from './input'
import close from '../assets/close.svg';


export default function StoreModal({isOpen,onSubmit,closeModal}){

    let handleSubmit = () => {
        let name = document.getElementById("name").value;
        let website = document.getElementById("website").value;
        let city = document.getElementById("city").value;
        onSubmit(name,website,city);   
    }

    return (
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
                <h3>ثبت فروشگاه</h3>
            </div>
            <div className={styles.modalcontainer} id={styles.modalcontainer}>
                <Input
                    type="text"
                    label="نام فروشگاه"
                    id="name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText=".این نام کاربری قبلا استفاده شده است"
                />

                <Input
                    type="text"
                    label="سایت فروشگاه"
                    id="website"
                    validators={[]}
                    errorText=".این سایت معتبر نیست"
                />

                <Input
                    type="text"
                    label="شهر فروشگاه"
                    id="city"
                    validators={[]}
                    errorText=".این شهر وجود ندارد"
                />

            </div>

            <div>
                <button id='signbtn' onClick={() => handleSubmit()} >
                    ثبت فروشگاه
                </button>
                
            </div>
        </Modal>
    )
}