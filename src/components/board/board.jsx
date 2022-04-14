import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Loadmore from "../load-more/load-more";
import Event from "../event/event";
import storage from "../../storage";
import { AppRoute } from "../../const";

const Board = ({ sortIsNeed, loadIsNeed, isEdit, isAdd, mode }) => {
    const cardObjects = mode === AppRoute.ARCHIVE ? storage.archivedCards : storage.cards;
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
                    {cardObjects.length > 0
                        ? cardObjects.map(card => <Card key={card.id} data={card} />)
                        : <NoEvents />
                    }
                </div>
                {loadIsNeed && <Loadmore />}
            </section>
        )
    }
}

export default Board;