import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from "react";
import AboutImage from "../../../images/aboutImg.png";
import {
  AboutContent,
  AboutWrapper,
  AboutRows,
  AboutColumn1,
  AboutColumn2,
  Question,
  Heading,
  Description,
  Title,
  Text,
  ImgWrap,
  Img,
} from "./Styles";

const About = () => {

  useEffect(() => {
    AOS.init({duration:500});
  }, [])
  return (
    <AboutContent>
      <AboutWrapper >
        <AboutRows>
          <AboutColumn1 data-aos="fade-right">
            <Text>
              <Question>Qu'est-ce-que Hortensia?</Question>
              <Heading>Avec Peace In Love comme slogan</Heading>
              <Description>
                <Title>HORTENSIA Organisation</Title> Est une structure
                Artistique et humanitaire dont la Mission est de Communiquer
                pour pacifier en apportant a chacun et a tous la vraie paix et
                le vrai amour du coeur. <br/>Ayant pour vision d'un present et un
                avenir ou les relations des jeunes des differentes cultures sont
                rendue plus humaines et plus proches. <br/><br/>Oeuvrant dans
                l'art,culture et Education;Paix et Engagement;Entrepreneuriat
                social.
              </Description>
            </Text>
          </AboutColumn1>
          <AboutColumn2 data-aos="fade-left">
            <ImgWrap>
              <Img src={AboutImage} alt="AboutImage" />
            </ImgWrap>
          </AboutColumn2>
        </AboutRows>
      </AboutWrapper>
    </AboutContent>
  );
};

export default About;
