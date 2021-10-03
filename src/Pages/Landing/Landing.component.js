import React, {useState} from "react"
import {Block, Button, Container, Intro, Item, ItemGroup} from "./Landing.style";

const Landing = () => {
    const [blur, setBlur] = useState(false)

    return (
        <Container>
            <ItemGroup blured={blur}>
                <Item onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}>
                    <Block>
                        <Intro>
                            <h1>HI</h1>
                            <h4>I'm Vahid!</h4>
                            <h5>Front-end Developer</h5>
                        </Intro>
                        {blur && <Button
                            initial={{opacity: 0}}
                            animate={{
                                opacity: 1,
                                transition: {duration: .3, yoyo: Infinity}
                            }}>Enter</Button>}
                    </Block>
                </Item>
            </ItemGroup>
        </Container>
    )
}


export default Landing