import React, { useState } from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Loadmore from "../load-more/load-more";
import { useLocation } from "react-router-dom";

const Board = ({ events }) => {

  const [step, setStep] = useState(1);

  const handleLoadMore = () => {
    events.length >= step 
    ? setStep(step + 5)
    : setStep(events.length);
  }

  const location = useLocation();

  return (
    <section className="board">
      {(location.pathname === "/") && <Sorting />}
      <div className="board__events">
        {events.length > 0
          ? events.slice(0, step).map(event => <Card {...event} key={event._id} />)
          : <NoEvents />
        }
      </div>
     <Loadmore handleLoadMore={handleLoadMore}/>
    </section>
  );
};

export default Board;
