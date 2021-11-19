import React from "react";
import nftModel from "../models/nft.models"

interface PropTypes{
    nft:nftModel
}

const NFTCard=(props:PropTypes)=>{
    return(
        <>
            <div className="nftCard">
                <div className="nftCardWrapper">
                    <div className="nftImage">
                        <img src={props.nft.image}/>
                    </div>
                    <div className="nftImage">
                        {props.nft.name}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NFTCard;
