import React from 'react';
import './css/loginModel.css'

const ProductModal = ({Detail,Show,Close}) => {

    return (
        <div className='modal' style={{display:Show}} >
            <div className='modal-content'>
                <div className='modal-header'>
                    <div className='modal-title'> Details</div>
                </div>
                <div className='modal-body'>
                    {Detail}
                </div>
                <div className='modal-footer'>
                    <button onClick={Close}> Close </button>
                </div>
            </div>
        </div>
    )

}

export default ProductModal;