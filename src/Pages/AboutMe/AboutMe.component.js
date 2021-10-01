import React from "react"
import {connect} from "react-redux";
import {motion} from "framer-motion";

import {setAboutMeData} from "../../Redux/actions/portfolio.action";
import style from "./AboutMe.module.scss"
import ComponentWithAnimation from "../../Hoc/componentWithAnimation";


class AboutMe extends React.Component {

    componentDidMount() {
        this.props.setAboutMeData()
    }

    render() {
        return (
            <>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}}
                            className={style.container}>
                    <div className={style.leftSide}>
                        {/*<h2>About me</h2>*/}
                    </div>
                    <div className={style.border}/>
                    <div className={style.rightSide}>
                        {/*<h2>Right side</h2>*/}
                    </div>
                </motion.div>
            </>
        )

    }

}

const mapStateToProps = (state) => ({
    aboutMe: state.portfolio.aboutMe
})

const mapDispatchToProps = (dispatch) => ({
    setAboutMeData: () => dispatch(setAboutMeData())
})

export default ComponentWithAnimation(connect(mapStateToProps, mapDispatchToProps)(AboutMe))