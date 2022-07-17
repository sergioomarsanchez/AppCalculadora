import React from "react";
import '../stylessheet/BotonClear.css'

const BotonClear = (props)=>{
    return(
        <button className='boton-clear' onClick={props.manejarClear}>
            {props.children}
        </button>  
    );
};
export default BotonClear