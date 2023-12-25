import styled, { css } from "styled-components";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const SliderSection = styled.section`
  margin-top:-70px;
  height: 120vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    height:85vh;
  }

  @media screen and (max-width: 500px) {
    height:75vh;
  }
`;

export const AboutSvg = styled.div`
    height:40vh;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index:20;

    @media screen and (max-width: 800px) {
      height:25vh;
    }

  @media screen and (max-width: 500px) {
    height:15vh;
  }
`;

export const SliderWrapper = styled.div`
  height:80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
}
`;
export const HeroContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  left: 100px;
  bottom: 0px;
  color: #fff;

  h3 {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    height: 30px;
    font-weight: 400;
    font-family: "Ubuntu", sans-serif;
    text-align: left;
    margin-bottom: 10px;
    border-bottom: 2px solid #a36a00;
  }

  h2 {
    font-size: clamp(0.8rem, 4vw, 2rem);
    font-weight: 600;
    font-family: "Lobster", cursive;
    text-align: left;
  }

  h1 {
    font-size: clamp(0.5rem, 10vw, 5rem);
    font-weight: 900;
    font-family: 'Public Sans';
    color: #a36a00;
    text-align: left;

  }

  p {
    font-size: clamp(0.5rem, 8vw, 1rem);
    font-weight: 200;
    font-family: "Explora", cursive;
    width: 400px;
  }

  @media screen and (max-width: 560px) {
    left: 30px;
    p {
      width: 300px;
    }
  }
`;

export const SliderButton = styled.div`
  z-index: 10;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #003366;
  cursor: pointer;
  background: transparent;
  border-radius: 50px;
  padding: 10px;
  margin-rigth: 1rem;
  user-selector: none;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
    border: 1px solid;
  }
`;
export const SliderButtonPrev = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 10px;
`;
export const SliderButtonNext = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 10px;
`;
export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

