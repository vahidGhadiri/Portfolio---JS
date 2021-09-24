import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Page} from "./Config/Variables";
import {Sidebar} from "./Components/index"


const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Sidebar/>
                    <Route path={"/"} component={Page.AboutMe}/>
                </Switch>
            </Router>
        </>
    )
}


export default App
