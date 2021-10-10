import React from "react"
import {Backdrop, Main, MainLayout} from "./Layout.style";

const Layout = ({children}) => {
    return (
        <MainLayout>
            <Backdrop>
                <Main>
                    {children}
                </Main>
            </Backdrop>
        </MainLayout>
    )
}

export default Layout