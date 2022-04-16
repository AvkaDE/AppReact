import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";


const Archive = (props) => {
    // const { id } = props.match.params;

    // const render = () => {
    //     return id ? `Id availble - ${id}` : 'No ID'
    // }
    return (
        <>
        <Header mode={props.match.path}/>
        <section className="main__wrapper">
            <Board sortIsNeed={false} loadIsNeed={true} mode={props.match.path}/>
        </section>
        </>
    )
}

export default Archive;