import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";

const Form = ({ match: { params: { id } }}) => {
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Filter hideButton={true} />
                <section className="board">
                    <Event id={id}/>
                </section>
            </section>
        </>
    )
}

export default Form;
