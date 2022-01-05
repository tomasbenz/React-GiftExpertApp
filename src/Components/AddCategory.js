import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('Agregar Categoria')

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //esto es para prevenir el comportamiento default del form, que te acutaliza la pagina al hacer enter

        // console.log('Submit hecho')
        if( inputValue.trim().length > 2 ){
        setCategories( cats => [inputValue, ...cats, ]);
        setInputValue(''); 
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type ="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes =  {
    setCategories: PropTypes.func.isRequired
}