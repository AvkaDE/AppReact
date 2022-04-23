import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Loadmore from "../load-more/load-more";
import { useLocation } from "react-router-dom";



const Board = ({ events }) => {

  const location = useLocation();

  return (
    <section className="board">
      {(location.pathname === "/") && <Sorting />}
      <div className="board__events">
        {events.length > 0
                        ? events.map(event => <Card {...event} key={event._id} />)
                        : <NoEvents />
                    }
      </div>
      {(location.pathname === "/" || location.pathname === "/archive") && <Loadmore />}
    </section>
  );
};

export default Board;
