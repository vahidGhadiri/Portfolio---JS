import React from "react"
import {connect} from "react-redux";

import ComponentWithAnimation from "../../Hoc/componentWithAnimation";
import {setIsEntered} from "../../Redux/actions/portfolio.action";


class TechStack extends React.Component {

    componentDidMount() {
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <>
                <h2>TechStack</h2>
            </>
        )

    }

}


const mapDispatchToProps = (dispatch) => ({
    setIsEntered: (data) => dispatch(setIsEntered(data))
})

export default ComponentWithAnimation(connect(null, mapDispatchToProps)(TechStack))