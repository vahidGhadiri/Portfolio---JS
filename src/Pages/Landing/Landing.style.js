import styled from "styled-components";
import {motion} from "framer-motion";

import bg from "../../Assets/Images/bg.jpg"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background: url(${bg}) no-repeat fixed center;
  background-size: cover;
  transition: all .5s ease-in-out;
  z-index: 5;
`
export const Block = styled.div`
  transition: all .5s ease-in-out;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 75px;
`


export const ItemGroup = styled.div`
  transition: all .5s ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: ${props => props.blured ? "blur(10px)" : ""};
  background: rgba(0, 0, 0, 0.05);
`


export const Item = styled.div`
  backdrop-filter: none !important;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;

  &:hover {
    backdrop-filter: none;
  }

  &:hover ${Block} {
    transition: transform .5s ease-in-out;
    box-shadow: 0 0 50px #333;
    background: url(${bg}) no-repeat fixed center;
    background-size: cover;
  }
}
`


export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;

  h1 {
    font-family: Poppins, sans-serif;
    font-size: 150px;
  }

  h4 {
    font-size: 50px;
  }

  h5 {
    font-size: 50px;
    font-family: Birthstone Bounce, sans-serif;
  }
`

export const Button = styled(motion.button)`
  all: unset;
  position: absolute;
  bottom: 20px;
  font-size: 20px;
`
