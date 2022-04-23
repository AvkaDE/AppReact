import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/notfound/notfound"

const App = ({events}) => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Main events={events}/>
                    </Route>
                    <Route path="/archive" exact>
                    <Archive events={events}/>
                    </Route>
                    <Route path="/event/:id?" exact component={Form}>
                    </Route>
                    <Route component={NotFound}>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;