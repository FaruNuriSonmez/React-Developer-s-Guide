import React, {useEffect, useState} from "react";
import axios from "axios";

const pinataApiKey = 'a452f3f355b799475e6b';
const pinataSecretApiKey = '5d14c5a6bd8ad16ff1a27db133e184c206a82eba54629551100d20c7185fd70e';

function Authentication(){
    useEffect(() => {
        getAuthentication()
    },[])

    const getAuthentication = async () => {
        const url = "https://api.pinata.cloud/data/testAuthentication";
        axios.get(url, {
            headers:{
                pinata_api_key:pinataApiKey,
                pinata_secret_api_key:pinataSecretApiKey
            }
        }).then(function (response){
            console.log(response.data.message);
        }).catch(function (error){
            console.log(error)
        });
    }
    return (
        <>
        </>
    )
};

export default Authentication;
