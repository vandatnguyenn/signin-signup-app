import React, { useState, useEffect } from 'react';

function Memes() {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function reloadImages(){
        let randomNumber = getRndInteger(0, images.length);
        setIndex(randomNumber);
    }

    function getImages(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(
            (result) => {
                const gallery = [];
                for(let i = 0; i < result.data.memes.length; i++){
                    gallery.push(result.data.memes[i]);
                }
                setIsLoaded(true);
                setImages(gallery);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    useEffect(() => {
        getImages();
    },[]);

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const gallery = {
        float: "left",
        width: "300px",
        padding: "2px",
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else {
        return (
            <div>
                <p style={style}>Click to reload images</p>
                <ul style={style}>
                    <button onClick={() => reloadImages()}>Reload</button>
                </ul>
                <ul>
                    <div style={gallery}>
                    {
                        <img src={images[index].url} width="300px"></img>
                    }
                    </div>
                </ul>
            </div>
        );
    }
}

export default Memes;