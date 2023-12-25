import styled from "styled-components";

export const AboutContent = styled.section`
  position: relative;
  overflow: hidden;
  background: #fff;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 16px;
  @media screen and (max-width: 760px) {
    margin-top: 15px;
  }
`;
export const AboutColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 16px;
`;
export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`;
export const Question = styled.div`
  color: #003366;
  font-size: clamp(1rem, 8vw, 2rem);
  font-weight: 600;
  margin-bottom: 0;
  font-family: "Patua One", cursive;
`;

export const Heading = styled.h1`
  color: #938c8c;
  margin-bottom: 24px;
  font-weight: 400;
  font-family: "Patua One", cursive;
  font-size: clamp(1.5rem, 8vw, 3rem);
  border-bottom: 5px solid #a36a00;
`;

export const Description = styled.div`
  max-width: 440px;
  margin-bottom: 24px;
  font-family: "Patua One", cursive;
  font-size: clamp(0.4rem, 8vw, 0.9rem);
  color: #555555;
`;
export const Title = styled.h4`
  font-family: "Patua One", cursive;
  font-size: clamp(0.5rem, 8vw, 1.2rem);
  color: #a36a00;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0 0 10px 0;
  object-fit: cover;
  width: 100%;
`;
