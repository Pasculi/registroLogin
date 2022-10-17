import React from 'react';
import '../../../src/App.css';
const DisplayLogin = (props) => {

    const {nombre, password, confirmPassword } = props
    return ( 
        <div className='display'>
            <h1 className='titulo'>Display</h1>
            <p>{nombre}</p><br />
            <p>{password}</p><br />
            <p>{confirmPassword} </p><br />
        </div>
     );
}
 
export default DisplayLogin;