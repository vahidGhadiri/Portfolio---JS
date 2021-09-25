import React from "react"
import {Route, Switch, useLocation} from "react-router";
import {AnimatePresence} from "framer-motion";

import styled from "styled-components";
import {Sidebar} from "./Components/index"
import * as page from "./Pages/index"


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const App = () => {
    const location = useLocation();
    return (
        <>
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
        </>
    )
}


export default App
