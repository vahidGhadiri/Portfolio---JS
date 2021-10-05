import styled from "styled-components";
import bg from "../Assets/Images/bg.jpg"


export const MainLayout = styled.div`
  background: url(${bg}) no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(10px) !important;
`