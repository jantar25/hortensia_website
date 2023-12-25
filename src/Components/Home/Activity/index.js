import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from "react";
import ActivityImage from "../../../images/ActivityImage.jpg";
import {
  ActivityContent,
  ActivityWrapper,
  ActivityRows,
  ActivityColumn1,
  ImgWrap,
  Img,
  ActivityColumn2,
  Text,
  Presentation,
  Heading,
  Description,
  Title,
} from "./Styles";

const Activity = () => {
  useEffect(() => {
    AOS.init({duration:3000});
  }, [])
  return (
    <ActivityContent>
      <ActivityWrapper>
        <ActivityRows>
          <ActivityColumn1 >
            <ImgWrap>
              <Img src={ActivityImage} alt="ActitivityImage" />
            </ImgWrap>
          </ActivityColumn1>
          <ActivityColumn2 data-aos="zoom-in-down">
            <Text>
              <Presentation>Nos Membres</Presentation>
              <Heading>Ayant Une vie epanuis et Familiale</Heading>
              <Description>
                <Title>HORTELINS et HORTELINES</Title> ont une structure
                Artistique et humanitaire dont la Mission est de Communiquer
                pour pacifier en apportant a chacun et a tous la vraie paix et
                le vrai amour du coeur. Ayant pour vision d'un present et un
                avenir ou les relations des jeunes des differentes cultures sont
                rendue plus humaines et plus proches. Oeuvrant dans
                l'art,culture et Education;Paix et Engagement;Entrepreneuriat
                social.
              </Description>
            </Text>
          </ActivityColumn2>
        </ActivityRows>
      </ActivityWrapper>
    </ActivityContent>
  );
};

export default Activity;
