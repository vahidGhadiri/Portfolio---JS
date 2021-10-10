import React from "react"
import {connect} from "react-redux";

import ComponentWithLayOut from "../../Hoc/componentWithLayout";

import {setAboutMeData, setIsEntered} from "../../Redux/actions/portfolio.action";
import {Avatar, Container, Description, Info, InfoItem, LeftSide, RightSide} from "./AboutMe.style";


class AboutMe extends React.Component {

    componentDidMount() {
        this.props.setAboutMeData()
        this.props.setIsEntered(true)
    }

    componentWillUnmount() {
        this.props.setIsEntered(false)
    }

    render() {
        const {avatar, fullName, job, birthday, email, phone, location, description} = this.props.aboutMe
        return (
            <div>
                <Container initial={{opacity: 0}}
                           animate={{opacity: 1, transition: {duration: 1, ease: "easeInOut", delay: 0.5}}}>
                    <LeftSide>
                        <Avatar src={avatar}/>
                        <Info>
                            <InfoItem><span>Name:</span>{fullName}</InfoItem>
                            <InfoItem><span>Title:</span>{job}</InfoItem>
                            <InfoItem><span>Date of Birth:</span>{birthday}</InfoItem>
                            <InfoItem><span>Email:</span>{email}</InfoItem>
                            <InfoItem><span>Phone:</span>{phone}</InfoItem>
                            <InfoItem><span>Location:</span>{location}</InfoItem>
                        </Info>
                    </LeftSide>

                    <RightSide>
                        <Description>
                            <h1>Description</h1>
                            <p>{description}</p>
                        </Description>
                    </RightSide>
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