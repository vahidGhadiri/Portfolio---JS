import React from "react"
import {Backdrop, Main, MainLayout} from "./Layout.style";

const Layout = (props) => {
    return (
        <MainLayout>
            <Backdrop initial={{opacity: 0}}
                      animate={{opacity: 1, transition: {duration: .5, delay: .3, ease: "easeInOut"}}}>
                <Main>
                    {props.children}
                </Main>
            </Backdrop>
        </MainLayout>
    )
}

export default Layout