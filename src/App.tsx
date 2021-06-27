import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "./components/Header"
import HeroCard from "./components/HeroCard"
import characterModel from "./models/character.models";

const hash = "fa13dfbaf205e85734e784667d30f0a3";

function App(){
    const [characterList, setCharacterList]=useState<Array<characterModel>>([])

    useEffect(()=>{
        getCharacters()
    },[])

    const getCharacters=()=>{
        let heroesArray:Array<characterModel>=[]

        const url="http://gateway.marvel.com/v1/public/comics?ts=100&apikey=3d91afddab11488aa11293be07efdb9f&hash="+hash
        axios.get(url).then((response)=>{
            console.log(response)
            response.data.data.results.forEach((item:any)=>{
                heroesArray.push({
                    id:item.id,
                    image:item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension,
                    name:item.title
                })
            })
            setCharacterList(heroesArray)
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    return(
        <>
        <Header/>
            <div className="scrollWrapper">
                <div className="cardArea">
                    {characterList.length>0 && characterList.map((item:characterModel,index:number)=>{
                        return(
                            <div className="cardAreaColumn" key={index}>
                                <HeroCard character={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default App;
