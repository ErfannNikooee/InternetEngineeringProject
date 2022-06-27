import React from 'react';
import './css/loginModel.css'

const loginModal = ({Detail,Show}) => {

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
                                                            
                </div>
            </div>
        </div>
    )

}

export default loginModal;