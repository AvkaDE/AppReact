import React from "react";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import { AppRoute } from "../../const";

const App = () => {
    return (
        <>
        <Main mode={AppRoute.MAIN}/>
        <Archive mode={AppRoute.ARCHIVE} />
        </>
    )
}

export default App;