import * as React from "react";
import {Card} from "./Card";
import {ICard} from "./Types";
import {data} from "./Data";

interface IState{
    cards: ICard[];
}
class CardDeck extends React.Component<{}, IState>{
    state: IState = {
        cards: data
    }
    cardClickHandler = (card: ICard) =>{
        console.log({ card });
    }
    render() {
        const cardList = data.map( c=> (<Card key={c.Id} card={c} clickHandler={this.cardClickHandler}/>))
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