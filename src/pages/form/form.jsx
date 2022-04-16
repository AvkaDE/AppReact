import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";

import Board from "../../components/board/board";

const Form = ({ match: { params: { id } , path }}) => {
    return (
        <>
            <Header mode={path} />
            <section className="main__wrapper">
                <Filter hideButton={true} />
                {id 
                    ? <Board sortIsNeed={false} loadIsNeed={false} isEdit={true} isAdd={false} /> 
                    : <Board sortIsNeed={false} loadIsNeed={false} isEdit={false} isAdd={true} />
                }
            </section>
        </>
    )
}

export default Form;
