import styled from "styled-components";

export const ActivityContent = styled.section`
  position: relative;
  overflow: hidden;
  background: #000;
`;

export const ActivityWrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const ActivityRows = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-row: 1fr;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
  }
`;

export const ActivityColumn1 = styled.div`
  height: 100%;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 50%;
    height: 90vh;
    bottom: 0vh;
    right: 40%;
    overflow: hidden;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  @media screen and (max-width: 960px) {
    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      width: 100%;
      top: 0vh;
      right: 0%;
      overflow: hidden;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
`;
export const ActivityColumn2 = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 30px;
`;
export const Text = styled.div`
  max-width: 540px;
  padding-top: 70px;
  padding-bottom: 20px;
`;
export const Presentation = styled.div`
  color: #003366;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0;
  font-family: "Patua One", cursive;
`;

export const Heading = styled.h1`
  color: #938c8c;
  margin-bottom: 24px;
  font-weight: 400;
  font-family: "Patua One", cursive;
  font-size: 40px;
  border-bottom: 5px solid #a36a00;
`;

export const Description = styled.div`
  max-width: 440px;
  margin-bottom: 24px;
  font-family: "Patua One", cursive;
  font-size: 15px;
  color: #555555;
`;
export const Title = styled.h4`
  font-family: "Patua One", cursive;
  font-size: 20px;
  color: #a36a00;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  margin: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
