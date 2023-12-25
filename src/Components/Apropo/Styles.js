import styled from "styled-components";

export const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ContentWrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:1.5rem 1rem;
padding:10px;
width:90%;
`

export const Title = styled.h1`
display:flex;
justify-content:center;
align-items:center;
color:#003366;
font-size: clamp(1rem, 8vw, 2rem);
margin-bottom:20px;
`
export const Description = styled.div`
display:flex;
justify-content:center;
text-align:center;
color:#938c8c;
font-size: clamp(0.4rem, 8vw, 1.3rem);
width:70%;
`

export const TeamCardWrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row: 1fr;
align-items: center;
justify-content: center;

@media screen and (max-width: 760px) {
  grid-template-columns: 1fr;
}
`

export const TeamCard = styled.div`
height: 300px;
width: 90%;
margin:0.6rem 2rem;
display: flex;
flex-direction: column;
position: relative;
transition: all 0.5s ease-in-out;

&:hover{
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
}
`

export const ImgWrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:20px;

h3{
    color:#003366;
}
`

export const Img = styled.img`
width:200px;
height:200px;
border-radius:50%;
object-fit:cover;
margin-bottom:10px;
`

export const Descrip = styled.p`
text-align:center;
color:#938c8c;
font-style:italic;
font-size: clamp(0.4rem, 8vw, 1rem);
`