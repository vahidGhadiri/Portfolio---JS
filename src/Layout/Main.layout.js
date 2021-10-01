import React from "react"
import style from "./Main.module.scss"

const MainLayout = (props) => {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

export default MainLayout