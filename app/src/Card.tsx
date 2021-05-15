import React from "react";
import {ICard} from "./Types";

export interface IProps{
    card:ICard
}

const Card: React.FunctionComponent<IProps> = ({card}) => {
    switch(card.state){
        case "matched":
            return(
                <div className="col">
                    <div className="card matched">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            )
        case "selected":
            return (
                <div className="col">
                    <div className="card selected">
                        <div className="card-body text-center">
                            {card.content}
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="col">
                    <div className="card unmatched">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            )
    }


}

export {Card};