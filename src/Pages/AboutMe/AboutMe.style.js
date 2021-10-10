import styled from "styled-components"
import {motion} from "framer-motion";

export const Container = styled(motion.div)`
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: [first] 30% [second] 70%;
`
export const Avatar = styled(motion.img)`
  width: 100%;
  height: auto;
`

export const Info = styled(motion.ul)`
  list-style: none;
  width: 100%;
  margin: 50px 10px
`

export const LeftSide = styled(motion.div)`
  background: blue;
`

export const InfoItem = styled(motion.li)`
  margin: 10px;

  span {
    color: #A4B2BC;
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    margin-top: 20px !important;
  }
`

export const Description = styled(motion.div)`
`

export const RightSide = styled.div`
  background: red;
`