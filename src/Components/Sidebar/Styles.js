import styled from "styled-components";

import {colors} from "../../Assets"

export const Button = styled('button')`
  align-items: center;
  background-color: ${colors.black};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  margin: .5rem 0 0 .5rem;
  justify-content: center;
  position: relative;
  width: 2.5rem;

  &::before, &::after {
    background-color: ${colors.white};
    content: "";
    height: 2px;
    position: absolute;
    width: 1rem;
    transition: all .3s ease;
  }

  &::before {
    top: ${props => props.clicked ? "1.5" : "1rem"};
    transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
  }

  &::after {
    top: ${props => props.clicked ? "1.2" : "1.5rem"};
    transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"}
  }
`

export const SidebarContainer = styled('div')`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin-top: 1rem;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
  width: 3.5rem;
`

export const LogoContainer = styled(`div`)`
  width: 2rem;

  img {
    height: auto;
    width: 100%;
  }
`

export const SlickBar = styled('ul')`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 0 30px 30px 0;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  list-style: none;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  transition: all .5s ease;
  width: ${props => props.clicked ? "12rem" : '3.5rem'};
`

export const Item = styled('li')`
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  padding: 1rem 0 1rem 1rem;
  text-decoration: none;
  width: 100%;


  &:hover {
    border-right: 4px solid ${colors.white};

    img {
      //using filter instead of using hex
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg) brightness(78%) contrast(85%);
  }
`;

export const Text = styled('span')`
  overflow: hidden;
  width: ${props => props.clicked ? "100%" : "0"};
  margin-left: ${props => props.clicked ? "3rem" : "0"};
  transition: all .2s ease-in-out;
`