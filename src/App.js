import React from "react"
import {Route, Switch, useLocation} from "react-router-dom";
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

    const location = useLocation()


    return (
        <>
            <Sidebar/>
            <Pages>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/calender" exact component={page.Calender}/>
                        <Route path="/documents" exact component={page.Documents}/>
                        <Route path="/" exact component={page.Home}/>
                        <Route path="/projects" exact component={page.Projects}/>
                        <Route path="/team" exact component={page.Team}/>
                    </Switch>
            </Pages>
        </>
    )
}


export default App
