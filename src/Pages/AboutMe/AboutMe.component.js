import React from "react"
import {connect} from "react-redux";

import ComponentWithLayOut from "../../Hoc/componentWithAnimation";

import {setAboutMeData, setIsEntered} from "../../Redux/actions/portfolio.action";
import {Container} from "./AboutMe.style";
import {Sidebar} from "../../Components";


class AboutMe extends React.Component {

    componentDidMount() {
        this.props.setAboutMeData()
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <>
                <Sidebar/>
                <Container initial={{opacity: 0}}
                           animate={{opacity: 1, transition: {duration: 1, ease: "easeInOut", delay: 0.5}}}>
                    Everything should render here!
                </Container>
            </>
        )

    }

}

const mapStateToProps = (state) => ({
    aboutMe: state.portfolio.aboutMe
})

const mapDispatchToProps = (dispatch) => ({
    setAboutMeData: () => dispatch(setAboutMeData()),
    setIsEntered: (data) => dispatch(setIsEntered(data))
})

export default ComponentWithLayOut(connect(mapStateToProps, mapDispatchToProps)(AboutMe))