export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GLicWdej0numlgMURNuXQDQ8yNzPpeoX`
    
    const resp = await fetch (url);

    const {data} = await resp.json();

    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // se le pone el signo de ? para que si tiene esa propiedad la traiga, se supone que todas las tienen pero como no sabemos 100% le ponemos ?
        }
    })

    return gifs;
}