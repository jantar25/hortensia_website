import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  HeaderImg,
  Title,
} from "./Styles";

import EventImg from "../../../images/EventsHeader.JPG";

const EventsHeader = () => {
  AOS.init({duration:2000});
  return (
      <Header>
        <HeaderImg src={EventImg} alt={EventImg} />
        <Title data-aos="fade-right">Nos Evenements</Title>
      </Header>
      );
};

export default EventsHeader;