import React from "react"
import {connect} from "react-redux";

import ComponentWithAnimation from "../../Hoc/componentWithAnimation";

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
            <>
                <Container>
                    <h2>About me</h2>
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

export default ComponentWithAnimation(connect(mapStateToProps, mapDispatchToProps)(AboutMe))