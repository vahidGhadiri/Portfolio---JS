import React, {useState} from "react"

import {Calender, Documents, Home, Projects, Team} from "../../Assets/index";
import {Container, Item, SlickBar, Text} from "./Sidebar.style"


const Sidebar = () => {
    const [click, setClick] = useState(false)
    const [profileClick, setProfileClick] = useState(false)

    return (
        <Container>
            {/*<Button onClick={() => setClick(!click)} clicked={click}/>*/}
            <SlickBar clicked={click} onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)}>
                <Item exact activeclass="active" to="/about-me" onClick={() => setClick(false)}>
                    <img src={Home} alt="Home"/>
                    <Text clicked={click}>About Me</Text>
                </Item>
                <Item exact activeclass="active" to="/team" onClick={() => setClick(false)}>
                    <img src={Team} alt="Team"/>
                    <Text clicked={click}>Tech Stack</Text>
                </Item>
                <Item exact activeclass="active" to="/calender" onClick={() => setClick(false)}>
                    <img src={Calender} alt="Calender"/>
                    <Text clicked={click}>Work Experience</Text>
                </Item>
                <Item exact activeclass="active" to="/documents" onClick={() => setClick(false)}>
                    <img src={Documents} alt="Documents"/>
                    <Text clicked={click}>Documents</Text>
                </Item>
                <Item exact activeclass="active" to="/projects" onClick={() => setClick(false)}>
                    <img src={Projects} alt="Projects"/>
                    <Text clicked={click}>Projects</Text>
                </Item>
            </SlickBar>


        </Container>
    )
}

export default Sidebar