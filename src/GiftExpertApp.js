import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        setCategories( [...categories, 'HunterXHunter'] );

        console.log(categories);
    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {   categories.map( category =>
                         <GifGrid
                            key={ category }
                            category={ category } 
                         />
                    )
                }
            </ol>
            
             
        </>
    )
}