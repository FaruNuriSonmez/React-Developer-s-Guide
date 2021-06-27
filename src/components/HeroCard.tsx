import React from "react";
import characterModel from "../models/character.models";
interface PropTypes{
    character:characterModel
}
const HeroCard=(props:PropTypes)=>{
    return(
        <div className="heroCard">
            <div className="heroCardWrapper">
                <div className="heroImage">
                    <img src={props.character.image}/>
                </div>
                <div className="heroName">
                    {props.character.name}
                </div>
            </div>
        </div>
    )
}

export default HeroCard;
