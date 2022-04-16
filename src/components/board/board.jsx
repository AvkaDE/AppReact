import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Loadmore from "../load-more/load-more";
import Event from "../event/event";
import storage from "../../storage";


const Board = ({ sortIsNeed, loadIsNeed, isEdit, isAdd }) => {
    
    if (isEdit) {
        return (
            <section className="board">
               <Event isEdit={true}/>
            </section>
        )
    } else if (isAdd) {
        return (
            <section className="board">
               <Event isEdit={false}/>
            </section>
        )
    } else {
        return (
            <section className="board">
                {sortIsNeed && <Sorting />}
                <div className="board__events">
                    {storage.cards.length > 0
                        ? storage.cards.map(card => <Card key={card.id} data={card} />)
                        : <NoEvents />
                    }
                </div>
                {loadIsNeed && <Loadmore />}
            </section>
        )
    }
}

export default Board;