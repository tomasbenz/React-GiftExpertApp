import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]) // si la categoria cambia se  va a volver a disparar este efecto, en este caso la petición http de GetGifs

    return (  
        <>
            <h3> { category } </h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">

                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }z
                            {...img}/>
                    ) )
                }
            </div>
        </>
    )
}
