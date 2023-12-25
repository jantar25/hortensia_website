import styled from "styled-components";

export const EditionContainer = styled.section`
display:flex;
flex-direction: column;
align-items:center;
margin:30px 50px;
padding:50px;

@media screen and (max-width: 900px) {
  margin:20px 30px;
  padding:20px;
}

@media screen and (max-width: 500px) {
  margin:20px;
  padding:0;
}
`
export const EditionDesc = styled.div`
width: 90%;
`
export const EditionCards = styled.div`
display:flex,
justify-content:center;
align-items:center;
padding: 20px;
margin: 30px;
`
export const EditionCardsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-row: 1fr;
align-items: center;
justify-content: center;

@media screen and (max-width: 760px) {
  grid-template-columns: 1fr;
}
`
export const EditionCard = styled.div`
height: 250px;
width: 95%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
background: whitesmoke;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
transition: all 0.5s ease-in-out;
margin: 20px;
padding: 10px 30px;
`
export const Title = styled.h1`
margin-bottom:10px;
color:#003366;
font_size:25px;
`

export const Description = styled.p`
padding: 10px;
`