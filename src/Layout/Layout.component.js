import React from "react"
import {MainLayout} from "./Layout.style";

const Layout = (props) => {
    return (
        <MainLayout>
            {props.children}
        </MainLayout>
    )
}

export default Layout