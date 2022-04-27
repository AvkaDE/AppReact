import { action } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { events } from "../../store";

const Sorting = observer(() => {

  const handleSorted = action((e) => {
    events.filtredData = events[e.target.value]
    
  });

  return(
      <div className="board__filter-list">
      <span className="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        className="board__filter visually-hidden"
        name="board-filter"
        value='defaultSortedData'
        onChange={handleSorted}
      />
      <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
      <input
        type="radio"
        id="board__filter-new"
        className="board__filter visually-hidden"
        onChange={handleSorted}
        name="board-filter"
        value='newSortedData'
      />
      <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
      <input
        type="radio"
        id="board__filter-old"
        className="board__filter visually-hidden"
        onChange={handleSorted}
        name="board-filter"
        value='oldSortedData'
      />
      <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
    </div>
  )
});

export default Sorting;