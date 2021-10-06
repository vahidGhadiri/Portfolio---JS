import React from "react"
import {Backdrop, Main, MainLayout} from "./Layout.style";

const Layout = (props) => {
    return (
        <MainLayout>
            <Backdrop>
                <Main>
                    {props.children}
                </Main>
            </Backdrop>
        </MainLayout>
    )
}

export default Layout