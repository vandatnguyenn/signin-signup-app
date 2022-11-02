import React, { useState, useEffect } from 'react';
import {useQuery} from 'react-query';

function Memes() {
    const [index, setIndex] = useState(0);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function reloadImages(){
        let randomNumber = getRndInteger(0, 100);
        setIndex(randomNumber);
    }

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    useEffect(() => {
        getMemes();
    }, []);

    const getMemes = async () => {
		const res = await fetch('https://api.imgflip.com/get_memes');
		return res.json();
	};
	
	const {data, error, isLoading} = useQuery('/memes', getMemes);

	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
	
	return (
        <div>
            <p style={style}>Click to reload images</p>
            <ul style={style}>
                <button onClick={() => reloadImages()}>Reload</button>
            </ul>
            <ul>
                <div>
                {
                    <img src={data.data.memes[index].url} width="300px" alt="..."></img>
                }
                </div>
            </ul>
        </div>
	);
}

export default Memes;