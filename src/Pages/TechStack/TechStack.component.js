import React from "react"
import {connect} from "react-redux";

import ComponentWithLayOut from "../../Hoc/componentWithLayout";
import {setIsEntered} from "../../Redux/actions/portfolio.action";
import {Container} from "./TechStack.style";


class TechStack extends React.Component {

    componentDidMount() {
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <Container>
                <h2>TechStack</h2>
            </Container>
        )

    }

}


const mapDispatchToProps = (dispatch) => ({
    setIsEntered: (data) => dispatch(setIsEntered(data))
})

export default ComponentWithLayOut(connect(null, mapDispatchToProps)(TechStack))