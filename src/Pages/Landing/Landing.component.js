import React from "react"
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import {setIsEntered} from "../../Redux/actions/portfolio.action";

class Landing extends React.Component {
    componentDidMount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <div>
                Landing page
                <NavLink exact to="/about-me" onClick={() => this.props.setIsEntered(true)}>
                    <button>Enter</button>
                </NavLink>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setIsEntered: (isEntered) => dispatch(setIsEntered(isEntered))
})

export default connect(null, mapDispatchToProps)(Landing)