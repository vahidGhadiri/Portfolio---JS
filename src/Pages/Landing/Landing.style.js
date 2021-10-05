import styled from "styled-components";

import bg from "../../Assets/Images/bg.jpg"
import {motion} from "framer-motion";

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

  h6 {
    color: #fff;
    font-size: 40px;
  }

  h4 {
    font-size: 50px;
    color: #fff;
    margin-top: 10px;
  }

  h5 {
    font-size: 60px;
    font-family: Birthstone, sans-serif;
    font-weight: 500;
    color: #fff;
    margin: unset;
  }

`

export const Enter = styled(motion.div)`
  cursor: pointer;
  all: unset;
  position: absolute;
  bottom: 20px;
  font-size: 15px;
  color: white;

  img {
    cursor: pointer;
    width: 20px;
    size: 20px;
    border-radius: 50%;
    background: #fff;
    padding: 5px;
  }
`
