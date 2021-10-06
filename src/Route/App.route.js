import React from "react"
import {Route, Switch, useLocation} from "react-router";
import {connect} from "react-redux";
import {AnimatePresence} from "framer-motion";

import * as page from "../Pages"
import {Pages, Root} from "./App.style";
import {Sidebar} from "../Components";


const App = (props) => {
    const location = useLocation();
    return (
        <Root>
            {props.isEntered && <Sidebar/>}
            <Pages>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={page.Landing}/>
                        <Route exact path="/about-me" component={page.Home}/>
                        <Route exact path="/team" component={page.Team}/>
                        <Route exact path="/calender" component={page.Calender}/>
                        <Route exact path="/documents" component={page.Documents}/>
                        <Route exact path="/projects" component={page.Projects}/>
                    </Switch>
                </AnimatePresence>
            </Pages>
        </Root>
    )
}


const mapStateToProps = (state) => ({
    isEntered: state.portfolio.isEntered
})

export default connect(mapStateToProps)(App)


