import React from "react"
import {connect} from "react-redux";

import ComponentWithLayOut from "../../Hoc/componentWithLayout";
import {setIsEntered} from "../../Redux/actions/portfolio.action";
import {Container} from "./Document.style";
import {Sidebar} from "../../Components";


class Documents extends React.Component {

    componentDidMount() {
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        return (
            <>
                <Container>
                    <h2>Documents</h2>
                </Container>
            </>

        )

    }

}


const mapDispatchToProps = (dispatch) => ({
    setIsEntered: (data) => dispatch(setIsEntered(data))
})

export default ComponentWithLayOut(connect(null, mapDispatchToProps)(Documents))