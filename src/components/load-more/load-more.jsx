import React from "react";

const Loadmore = ({handleLoadMore}) => {
    return (
        <button className="load-more" type="button" onClick={handleLoadMore}>Загрузить еще</button>
    )
}

export default Loadmore;