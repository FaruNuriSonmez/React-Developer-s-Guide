import React, {useEffect, useState} from "react";
import axios from "axios";

import NFTCard from "../pages/NFTCard"

import nftModel from "../models/nft.models"

const pinataApiKey = 'a452f3f355b799475e6b';
const pinataSecretApiKey = '5d14c5a6bd8ad16ff1a27db133e184c206a82eba54629551100d20c7185fd70e';

function Nfts(){

    const [ nftList, setnftList ]=useState<Array<nftModel>>([])

    useEffect(() => {
        getNfts()
    },[])

    const getNfts = async () => {
        let nftsArray:Array<nftModel>=[]

        const url = "https://api.pinata.cloud/data/pinList";
        axios.get(url, {
            headers:{
                pinata_api_key:pinataApiKey,
                pinata_secret_api_key:pinataSecretApiKey
            }
        }).then(function (response){
            console.log(response.data);
            response.data.rows.forEach((item:any)=>{
                nftsArray.push({
                    id:item.id,
                    image:"https://gateway.pinata.cloud/ipfs/"+item.ipfs_pin_hash,
                    name:item.metadata.name
                })
            })
            setnftList(nftsArray)
        }).catch(function (error){
            console.log(error)
        });
    }

    return(
        <>
            <div className="scrollWrapper">
                <div className="nftCardArea">
                    {nftList.length>0 && nftList.map((item:nftModel,index:number)=>{
                        return(
                            <div className="cardAreaColumn" key={index}>
                                <NFTCard nft={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Nfts;
