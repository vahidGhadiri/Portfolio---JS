import styled from "styled-components";
import {colors} from "../../Assets"
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";


export const Container = styled(motion.div)`
  z-index: 100;

  .active {
    border-right: 4px solid ${colors.white};

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }
`

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

export const SlickBar = styled('ul')`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 0 30px 30px 0;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  list-style: none;
  padding: 3rem 0;
  position: absolute;
  //top: 12rem;
  transition: all .5s ease;
  width: ${props => props.clicked ? "14rem" : '3.5rem'};
`

export const Item = styled(NavLink)`
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  padding: 1rem 0 1rem 1rem;
  text-decoration: none;
  width: 100%;
  white-space: nowrap;

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
  margin-left: ${props => props.clicked ? "1.5rem" : "0"};
  transition: all .3s ease-in-out;
`

export const Details = styled('div')`
  align-items: center;
  display: ${props => props.clicked ? "flex" : "none"};
  justify-content: space-between;
  transition: all .3s ease-in-out;
`

export const Name = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;

  h4 {
    display: inline-block;
  }

  a {
    font-size: .8rem;
    text-decoration: none;
    color: ${colors.gray};

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Logout = styled('button')`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg) brightness(100%) contrast(126%);
    transition: all .3s ease-in-out;

    &:hover {
      border: none;
      padding: 0;
      opacity: .5;
    }
  }
`