import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";


export const Nav = styled.nav`
  background: transparent;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font_zise: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 99;

  &.active {
    background: #003366;
  }

  @media screen and (max-width: 870px) {
    transition: all 1s ease;
  }


`;

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1;
  max-width: 1300px;
  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
`;
export const Logo1 = styled.img`
  width: 100%;
  height: 60px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #bebebe;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text_align: center;
  font-size: 1.1rem;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;

export const NavLinks = styled(LinkRouter)`
  color: #f5f5f5;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #a36a00;
  }

  &.active {
    border-bottom: 5px solid #a36a00;
  }
`;
export const NavContact = styled(LinkRouter)`
  color: #f5f5f5;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #a36a00;
  }`