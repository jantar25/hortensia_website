import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SiderbarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./Styles";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleFooter = ()=>{
    scroll.scrollToBottom();
  }
  return (
    <SiderbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Apropos" onClick={toggle}>
            Àpropos
          </SidebarLink>
          <SidebarLink to="/Programme"  onClick={toggle}>
            Programmes
          </SidebarLink>
          <SidebarLink to="/Evenement" onClick={toggle}>
            Evénement
          </SidebarLink>
          <SidebarLink to="/Edition" onClick={toggle}>
            Maison d'Editions
          </SidebarLink>
          <SidebarLink to="/" onClick={toggleFooter}>
            Contacts
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SiderbarContainer>
  );
};

export default Sidebar;
