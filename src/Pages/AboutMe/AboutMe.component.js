import React from "react"
import {connect} from "react-redux";

import ComponentWithLayOut from "../../Hoc/componentWithLayout";

import {setAboutMeData, setIsEntered} from "../../Redux/actions/portfolio.action";
import {Container} from "./AboutMe.style";


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
            <div>
                <Container initial={{opacity: 0}}
                           animate={{opacity: 1, transition: {duration: 1, ease: "easeInOut", delay: 0.5}}}>
                    <h3>Hier soll alles präsentiert werden!</h3>
                </Container>
            </div>
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