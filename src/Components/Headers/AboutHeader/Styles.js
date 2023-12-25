import styled from "styled-components";


export const Header = styled.div`
height: 60vh;
margin-top:-70px;
max-heigth: 1100px;
position: relative;
overflow: hidden;
&::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 80vh;
  bottom: 0vh;
  left: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );

`
export const Title = styled.h1`
position:absolute;
bottom:10%;
left:5%;
font-size: clamp(0.5rem, 10vw, 5rem);
color: #a36a00;
z-index:2;
`

export const HeaderImg = styled.img`
position:absolute;
top:0;
left:0;
object-fit:cover;
width:100%;
height:60vh;
z-index:1;
`