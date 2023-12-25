import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  HeaderImg,
  Title,
} from "./Styles";

import EventImg from "../../../images/AboutHeader.jpg";

const EventsHeader = () => {
  AOS.init({duration:2000});
  return (
      <Header>
        <HeaderImg src={EventImg} alt={EventImg} />
        <Title data-aos="fade-right">A Propos de nous</Title>
      </Header>
      );
};

export default EventsHeader;