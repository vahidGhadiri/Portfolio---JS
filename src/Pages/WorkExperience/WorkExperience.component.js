import React from "react"
import {connect} from "react-redux";

import ComponentWithAnimation from "../../Hoc/componentWithAnimation";
import {setIsEntered} from "../../Redux/actions/portfolio.action";


class WorkExperience extends React.Component {

    componentDidMount() {
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <>
                <h2> Work Experience</h2>
            </>
        )

    }

}


const mapDispatchToProps = (dispatch) => ({
    setIsEntered: (data) => dispatch(setIsEntered(data))
})

export default ComponentWithAnimation(connect(null, mapDispatchToProps)(WorkExperience))