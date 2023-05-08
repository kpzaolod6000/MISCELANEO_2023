const apiKey = 'gSrcU4PgsX8YZl98ZQ4grohAtc0Tc5Ip';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then( resp => resp.json())
    .then(({data}) => {
        // console.log(data.images.original.url);
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);