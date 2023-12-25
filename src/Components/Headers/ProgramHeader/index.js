import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  HeaderImg,
  Title,
} from "./Styles";

import ProgramImg from "../../../images/ProgramHeader.JPG";

const EventsHeader = () => {
  AOS.init({duration:2000});
  return (
    <Header>
    <HeaderImg src={ProgramImg} alt={ProgramImg} />
    <Title data-aos="fade-right">Nos Programmes</Title>
  </Header>
      );
};

export default EventsHeader;