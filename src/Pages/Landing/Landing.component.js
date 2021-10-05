import React, {useState} from "react"

import {Block, Container, Enter, Intro, Item, ItemGroup} from "./Landing.style";
import {Down} from '../../Assets/'
import {NavLink} from "react-router-dom";


const Landing = () => {
    const [blur, setBlur] = useState(false)

    const EnterVariant = {
        initial: {opacity: 0},
        animate: {
            opacity: .8, transition: {
                duration: .8,
                yoyo: Infinity,
                ease: 'easeInOut'
            }
        }
    }


    return (
        <Container>
            <ItemGroup blured={blur}>
                <Item onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}>
                    <Block>
                        <Intro>
                            <h6>Hey,</h6>
                            <h4>I'm Vahid!</h4>
                            <h5>Front-end Developer</h5>
                        </Intro>
                        {blur &&
                        <Enter variants={EnterVariant} initial={EnterVariant.initial} animate={EnterVariant.animate}>
                            <NavLink to={'./about-me'}>
                                <img src={Down} alt="enter to my portfolio"/>
                            </NavLink>
                        </Enter>}
                    </Block>
                </Item>
            </ItemGroup>
        </Container>
    )
}


export default Landing