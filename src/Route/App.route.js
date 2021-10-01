import React from "react"
import {Route, Switch, useLocation} from "react-router";
import {AnimatePresence} from "framer-motion";
import * as page from "../Pages"

import {Pages, Root} from "./App.style";
import {Sidebar} from "../Components";


const App = () => {
    const location = useLocation();
    return (
        <Root>
            <Sidebar/>
            <Pages>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={page.Home}/>
                        <Route path="/team" component={page.Team}/>
                        <Route path="/calender" component={page.Calender}/>
                        <Route path="/documents" component={page.Documents}/>
                        <Route path="/projects" component={page.Projects}/>
                    </Switch>
                </AnimatePresence>
            </Pages>
        </Root>
    )
}


export default App
