import React, {useState} from "react"

import {Avatar, Calender, Documents, Home, Logo, PowerOff, Projects, Team} from "../../Assets/index";
import {
    Button,
    Container,
    Details,
    Item,
    LogoContainer,
    Logout,
    Name,
    Profile,
    SidebarContainer,
    SlickBar,
    Text
} from "./Sidebar.style"


const Sidebar = () => {
    const [click, setClick] = useState(false)
    const [profileClick, setProfileClick] = useState(false)

    return (
        <Container>
            <Button onClick={() => setClick(!click)} clicked={click}/>
            <SidebarContainer>
                <LogoContainer>
                    <img src={Logo} alt="Logo"/>
                </LogoContainer>
                <SlickBar clicked={click}>
                    <Item exact activeClass="active" to="/">
                        <img src={Home} alt="Home"/>
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item exact activeClass="active" to="/team">
                        <img src={Team} alt="Team"/>
                        <Text clicked={click}>Team</Text>
                    </Item>
                    <Item exact activeClass="active" to="/calender">
                        <img src={Calender} alt="Calender"/>
                        <Text clicked={click}>Calender</Text>
                    </Item>
                    <Item exact activeClass="active" to="/documents">
                        <img src={Documents} alt="Documents"/>
                        <Text clicked={click}>Documents</Text>
                    </Item>
                    <Item exact activeClass="active" to="/projects">
                        <img src={Projects} alt="Projects"/>
                        <Text clicked={click}>Projects</Text>
                    </Item>
                </SlickBar>
                <Profile clicked={profileClick} onClick={() => setProfileClick(!profileClick)}>
                    <img src={Avatar} alt="Avatar" onClick={() => setProfileClick(!profileClick)}/>
                    <Details clicked={profileClick}>
                        <Name>
                            <h4>Vahid&nbsp;Ghadiri</h4>
                            <a href="/#">View profile</a>
                        </Name>
                        <Logout>
                            <img src={PowerOff} alt="Logout"/>
                        </Logout>
                    </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    )
}

export default Sidebar