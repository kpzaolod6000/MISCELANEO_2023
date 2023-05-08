
const getImagen = async () =>{

    try {
        const apiKey = 'gSrcU4PgsX8YZl98ZQ4grohAtc0Tc5Ip';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);    
    } catch (error) {
        //manejo del error
    }
    
}

getImagen()