import styled from "styled-components";


export const FooterContainer = styled.section`
  background-color: #131313;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinks = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const FooterWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 250px;
  margin: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterItemsTitle = styled.h1`
  margin-bottom: 15px;
  color: #fff;
`;

export const FooterItem = styled.a`
  text-decoration: none;
  margin: 10px;
  color: #a36a00;
  transition: all 0.5s ease;

  &:hover {
    color: whitesmoke;
    transition: all 0.5s ease-out;
  }
`;

export const FooterSocialMedia = styled.div`
  max-width: 1500px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1300px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;



export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;


export const FooterImg = styled.img`
  width: 50px;
`;

export const FooterRight = styled.p`
  color: #636363;
  margin-bottom: 2rem;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  

  &hover {
    color: #dd198b;
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;
  }
`;


