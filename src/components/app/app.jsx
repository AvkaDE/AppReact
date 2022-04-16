import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import NotFound from "../../pages/notfound/notfound"
import { AppRoute } from "../../const";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={AppRoute.MAIN} exact component={Main}>
                    </Route>
                    <Route path={AppRoute.ARCHIVE} exact component={Archive}>
                    </Route>
                    <Route path={AppRoute.EVENT} exact component={Form}>
                    </Route>
                    <Route path={AppRoute.ADD} exact component={Form}>
                    </Route>
                    <Route path="*" component={NotFound}>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;