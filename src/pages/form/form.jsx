import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import { AppRoute } from "../../const";
import Board from "../../components/board/board";

const Form = () => {
    return (
        <>
        <Header mode={AppRoute.EVENT}/>
        <section className="main__wrapper">
            <Filter hideButton={true}/>
            <Board sortIsNeed={false} loadIsNeed={false} isEdit={true} isAdd={false}/>
        </section>
        </>
    )
}

export default Form;
