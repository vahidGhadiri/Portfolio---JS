import React, {useState} from "react"

import {Calender, Documents, Home, Logo, PowerOff, Projects, Team} from "../../Assets/index";
import {Button, Item, LogoContainer, SidebarContainer, SlickBar, Text} from "./Styles"


const Sidebar = () => {
    const [click, setClick] = useState(false)

    return (
        <>
            <Button onClick={() => setClick(!click)} clicked={click}/>
            <SidebarContainer>
                <LogoContainer>
                    <img src={Logo} alt="Logo"/>
                </LogoContainer>
                <SlickBar clicked={click}>
                    <Item>
                        <img src={Home} alt="Home"/>
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item>
                        <img src={Team} alt="Team"/>
                        <Text clicked={click}>Team</Text>
                    </Item>
                    <Item>
                        <img src={Calender} alt="Calender"/>
                        <Text clicked={click}>Calender</Text>
                    </Item>
                    <Item>
                        <img src={Documents} alt="Documents"/>
                        <Text clicked={click}>Documents</Text>
                    </Item>
                    <Item>
                        <img src={Projects} alt="Projects"/>
                        <Text clicked={click}>Projects</Text>
                    </Item>
                </SlickBar>
                <div>
                    {/*<img src={Avatar} alt="Avatar"/>*/}
                    <div>
                        <div>
                            <h4>Vahid Ghadiri</h4>
                            <a href="/#">View profile</a>
                        </div>
                        <button>
                            <img src={PowerOff} alt="Logout"/>
                        </button>
                    </div>
                </div>
            </SidebarContainer>
        </>
    )
}

export default Sidebar