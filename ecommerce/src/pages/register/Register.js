import React from 'react';

function Register() {
    return (
        <div className="register-page d-flex ">
            <div
                className="register-page-left "
                style={{
                    backgroundColor: 'GrayText',
                    width: '50%',
                    padding: '100px'
                }}
            >
                left
            </div>
            <div
                className="register-page-right"
                style={{
                    backgroundColor: 'red',
                    right: '0',
                    width: '50%'
                }}
            >
                right
            </div>
        </div>
    );
}
export default Register;
