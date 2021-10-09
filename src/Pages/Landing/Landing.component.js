import React, {useState} from "react"
import {useHistory} from "react-router";
import {AnimatePresence, motion} from "framer-motion";

import {Block, Container, Enter, Intro, Item, ItemGroup, Languages} from "./Landing.style";
import {Down, DU, EN, FA} from '../../Assets/'


const Landing = () => {
    const [blur, setBlur] = useState(false)
    const [language, setLanguage] = useState(EN)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()

    const ButtonVariant = {
        initial: {opacity: 0},
        animate: {
            opacity: .8, transition: {
                duration: .8,
                yoyo: Infinity,
                ease: 'easeInOut'
            }
        }
    }

    const LanguageVariant = {
        initial: {opacity: 0},
        exit: {opacity: 0, y: 0, duration: {transition: .5, ease: "easeInOut"}}
    }

    const handleSelectLanguage = (language) => {
        setLanguage(language)
        setIsOpen(false)
    }

    return (
        <Container>
            <Languages>
                <motion.div onClick={() => setIsOpen(!isOpen)}>
                    <img src={language} alt="selected language"/>
                </motion.div>
                {isOpen &&
                <div>
                    <AnimatePresence exitBeforeEnter>
                        <motion.img src={EN} alt="english" onClick={() => handleSelectLanguage(EN)}
                                    initial={LanguageVariant.initial} exit={LanguageVariant.exit}
                                    animate={{opacity: 1, y: 10, transition: {duration: .5, ease: "easeInOut"}}}/>
                        <motion.img src={DU} alt="german" onClick={() => handleSelectLanguage(DU)}
                                    initial={LanguageVariant.initial} exit={LanguageVariant.exit}
                                    animate={{opacity: 1, y: 15, transition: {duration: .5, ease: "easeInOut"}}}/>
                        <motion.img src={FA} alt="farsi" onClick={() => handleSelectLanguage(FA)}
                                    initial={LanguageVariant.initial} exit={LanguageVariant.exit}
                                    animate={{opacity: 1, y: 20, transition: {duration: .5, ease: "easeInOut"}}}/>
                    </AnimatePresence>
                </div>
                }
            </Languages>
            <ItemGroup blured={blur}>
                <Item onMouseEnter={() => setBlur(true)} onMouseLeave={() => setBlur(false)}
                      initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .8}}}
                      exit={{opacity: 0, transition: {duration: .5, ease: "easeInOut", blur: 10}}}
                >
                    <Block>
                        <Intro>
                            <h6>Hey,</h6>
                            <h4>I'm Vahid!</h4>
                            <h5>Front-end Developer</h5>
                        </Intro>
                        {blur &&
                        <Enter variants={ButtonVariant} initial={ButtonVariant.initial} animate={ButtonVariant.animate}>
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