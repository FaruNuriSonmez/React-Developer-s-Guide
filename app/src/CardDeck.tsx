import * as React from "react";
import {Card} from "./Card";
import {ICard} from "./Types";
import {data} from "./Data";

interface IState{
    cards: ICard[];
}

class CardDeck extends React.Component<{}, IState>{
    selectedCardIds:number[] = [];
    selectedCards: ICard[] = [];
    state: IState = {
        cards: data
    }

    cardClickHandler = (card: ICard) => {
        const { cards } = this.state;
        if (this.selectedCardIds.length < 2){
            //If the number of cards selected is less than 2;
            //In other words, if no card is selected,
            //it will add 1 card, if 1 card is selected, the second will be added.
            this.selectedCardIds.push(card.Id);
            this.selectedCards.push(card);
            this.setState({
                ...this.state,
                cards: cards.map(c => c.Id === card.Id ? card : c)
            })
            if (this.selectedCardIds.length === 2){
                let newCards:ICard[] =  [];
                if (this.selectedCards[0].content === this.selectedCards[1].content){
                        newCards = cards.map(c => {
                            if (this.selectedCardIds.includes(c.Id)){
                                c.state = "matched";
                            }
                            return c;
                        })
                    }
                else {
                    newCards = cards.map( c => {
                        if (this.selectedCardIds.includes(c.Id)){
                            c.state = "unmatched"
                        }
                        return c;
                        })
                }
                this.selectedCardIds=[];
                this.selectedCards=[];
                this.setState({
                        ...this.state,
                    cards: newCards
                    })
                }
            }
        console.log({ card });
    }
    render() {
        const cardList = this.state.cards.map(c => (<Card key={c.Id} card={c} clickHandler={this.cardClickHandler}/>))
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