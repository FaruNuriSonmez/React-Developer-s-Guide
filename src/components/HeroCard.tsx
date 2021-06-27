import React from "react";

const HeroCard=()=>{
    return(
        <div className="heroCard">
            <div className="heroCardWrapper">
                <div className="heroImage">
                    <img src={"https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg"}/>
                </div>
                <div className="heroName">
                    Hero Name
                </div>
            </div>
        </div>
    )
}

export default HeroCard;
