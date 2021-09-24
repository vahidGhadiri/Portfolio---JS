import React from "react"
import {Route, Switch} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import styled from "styled-components";
import {Sidebar} from "./Components/index"
import * as page from "./Pages/index"

const App = () => {

    const Pages = styled('div')`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    return (
        <>
            <Sidebar/>
            <Pages>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={window.location} key={window.location.pathname}>
                        <Route exact path="/" component={page.Home}/>
                        <Route path="/team" component={page.Team}/>
                        <Route path="/calender" component={page.Calender}/>
                        <Route path="/documents" component={page.Documents}/>
                        <Route path="/projects" component={page.Projects}/>
                    </Switch>
                </AnimatePresence>
            </Pages>
        </>
    )
}


export default App
