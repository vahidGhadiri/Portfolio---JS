import React, {useState} from "react"
import {useHistory} from "react-router";

import {Block, Container, Enter, Intro, Item, ItemGroup} from "./Landing.style";
import {Down} from '../../Assets/'


const Landing = () => {
    const [blur, setBlur] = useState(false)
    const history = useHistory()

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
                <Item onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}
                      initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .8}}}
                      exit={{opacity: 0, transition: {duration: .5, ease: "easeInOut"}}}
                >
                    <Block>
                        <Intro>
                            <h6>Hey,</h6>
                            <h4>I'm Vahid!</h4>
                            <h5>Front-end Developer</h5>
                        </Intro>
                        {blur &&
                        <Enter variants={EnterVariant} initial={EnterVariant.initial} animate={EnterVariant.animate}>
                            <div onClick={() => history.push('/about-me')}>
                                <img src={Down} alt="enter to my portfolio"/>
                            </div>
                        </Enter>}
                    </Block>
                </Item>
            </ItemGroup>
        </Container>
    )
}


export default Landing