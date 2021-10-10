import styled from "styled-components";
import bg from "../Assets/Images/bg.jpg"
import {motion} from "framer-motion";


export const MainLayout = styled.div`
  background: url(${bg}) no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

export const Backdrop = styled(motion.div)`
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  width: 70%;
`
