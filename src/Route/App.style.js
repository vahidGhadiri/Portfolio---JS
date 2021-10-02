import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: calc(.5rem + 1vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
