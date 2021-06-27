import React from 'react';
import './App.css';

import Header from "./components/Header"
import HeroCard from "./components/HeroCard"

function App(){
    const getCharacters =()=>{

    }
    return(
        <>
        <Header/>
            <div className="scrollWrapper">
                <div className="cardArea">
                    <div className="cardAreaColumn">
                        <HeroCard/>
                    </div>
                    <div className="cardAreaColumn">
                        <HeroCard/>
                    </div>
                    <div className="cardAreaColumn">
                        <HeroCard/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
