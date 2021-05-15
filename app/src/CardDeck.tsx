import * as React from "react";
import {Card} from "./Card";
import {ICard} from "./Types";

const data: ICard[] = [
    {
        Id:1,
        content:"A",
        state:"unmatched"
    },
    {
        Id:1,
        content:"A",
        state:"selected"
    },
    {
        Id:1,
        content:"A",
        state:"matched"
    },
]

class CardDeck extends React.Component{
    render() {
        const cardList = data.map( c=> (<Card key={c.Id} card={c} />))
        return (
            <div className="container p-3 bg-dark">
                <div className="row row-cols-3 row-cols-md-2 g-4" >
                        {
                            cardList
                        }
                </div>
            </div>
        );
    }
}

export { CardDeck };