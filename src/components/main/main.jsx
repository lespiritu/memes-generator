import { useEffect } from "react";
import { useState } from "react"
import "./main.css"

export default function Main(){

    const [data, setData] = useState({
        textTop:"",
        textBottom:"",
        memeImage:null
    });



    const [allMemesImages,seAllMemesImages] = useState([]);

    function handlerChangeText(event){
        const {name, value} = event.target;
        setData(preVal=>({...preVal, [name]:value}))
    }

    function handlerBtn(){
        const randomNum = Math.floor(Math.random()*allMemesImages.length);
        const memesUrl = allMemesImages[randomNum].url;
        setData(preVal=>({...preVal, memeImage:memesUrl}));
    }

    useEffect(()=>{
        async function getmemes(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            seAllMemesImages(data.data.memes)
        }
        
        getmemes()
    },[data.memeImage])



    return(
        <div className="main">
            <div className="main-panel">
                <input onChange={handlerChangeText} type="text" name="textTop" id="textTop" />
                <input onChange={handlerChangeText} type="text" name="textBottom" id="textBottom" />
                <button onClick={handlerBtn}>Get a new meme image</button>
                <div onClick={handlerBtn} className="img-panel">
                    {data.memeImage ? 
                        <>
                         <img src={data.memeImage} alt="" />
                            <h1 className="text-top">{data.textTop}</h1>
                            <h1 className="text-bottom">{data.textBottom}</h1>
                        </> 
                    : <h2>Click the button to generate new meme image</h2> }
                </div>

                
            </div>
        </div>
    )
}