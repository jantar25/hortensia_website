import styled from "styled-components";


export const Container = styled.div`
flex:1;
margin:5px;
min-width:30%;
height:60vh;
display:flex;
overflow:hidden;
&:hover{
    background:rgba(0, 0, 0, 0.5); 
}

@media screen and (max-width: 900px) {
  min-width:100%;
}
`
export const Card = styled.div`
position:relative;
display:flex;
flex-direction:column;
height:100%;
width:100%;

`

export const ImgContainer = styled.div`
position:absolute;
height:100%;
width:100%;
&::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 40%;
    bottom: 0%;
    left: 0;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`

export const Info = styled.div`
width:100%;
position:absolute;
display:flex;
flex-direction:column;
bottom:10%;
`
export const Date = styled.span`
font-weight: 300;
color:red;
`
export const Title = styled.h3`
color:#003366;
margin-left:15px;
`

export const IconContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
position:absolute;
bottom:10px;
z-index:3;
padding: 0px 10px;
`

export const Desc = styled.span`
justify-content:center;
width:90%;
margin:10px;
font-size:15px;
color:white;
`

export const Wrapper = styled.div`
display:flex;
padding:50px;
@media screen and (max-width: 900px) {
  flex-direction:column;
  padding:10px;
}
`
export const PopImageContainer = styled.div`
flex:1;
`
export const PopImage = styled.img`
width:100%;
height:80hv;
object-fit:cover;
@media screen and (max-width: 900px) {
  height:10hv;
}
`
export const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
@media screen and (max-width: 900px) {
  padding:0px 10px;
}
`
export const PopTitle = styled.span`
font-size:40px;
font-weight:600;
color:orange;
@media screen and (max-width: 900px) {
  font-size:20px;
}
`
export const PopDescription = styled.p`
margin: 20px 0px;
@media screen and (max-width: 900px) {
  margin:10px;
  font-size:12px;
  height:80hv;
}
`