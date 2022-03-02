import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleAddInputChange = (e) => {
        
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {        
        
        e.preventDefault();
        
        

        if(inputValue.trim().length > 2){            
            setCategories(dato => [inputValue, ...dato ]);  
            setInputValue('');          
        }
        else{
            console.log("Por favor escribe algo")
        }

        
        
    }

    return(
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange = {handleAddInputChange}
           
        />
        </form>        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}