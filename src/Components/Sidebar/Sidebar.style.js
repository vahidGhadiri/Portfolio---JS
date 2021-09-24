import styled from "styled-components";
import {colors} from "../../Assets"
import {NavLink} from "react-router-dom";


export const Container = styled('div')`
  position: fixed;
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
  visibility: hidden;

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
  top: 12rem;
  transition: all .5s ease;
  width: ${props => props.clicked ? "12rem" : '3.5rem'};
`

export const Item = styled(NavLink)`
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
  margin-left: ${props => props.clicked ? "1.5rem" : "0"};
  transition: all .3s ease-in-out;
`

export const Profile = styled('div')`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 20px;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  height: 3rem;
  margin-left: ${props => props.clicked ? "12rem" : "0"};
  padding: .5rem 1rem;
  transition: all .3s ease;
  width: ${props => props.clicked ? "16rem" : "3rem"};

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.gray};
      padding: 2px;
    }
  }
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