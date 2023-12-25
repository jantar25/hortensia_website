import styled from "styled-components";


export const NewsContainer = styled.section`
height:50vh;
display:flex;
justify-content:center;
align_items:center;
position:relative;
`
export const NewsContainerCard = styled.div`
display:flex;
flex-direction: column;
align_items:center;
position:absolute;
top:20%;
width:60%;

h1{
    font-size: clamp(0.8rem, 4vw, 2rem);
    background: #005C97; 
    background: linear-gradient(to right, #363795, #005C97); 
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-bottom: 10px;
    text-align:center;

}
`

export const EmailContain = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:2rem;
border:2px solid #0575E6;

input{
    flex:8;
    width:100%;
    padding: 10px 15px;
}
`

export const Button = styled.button`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 40px;
    text-decoration: none;
    border: none;
    outline: none;
    color: #fff;
    background: #0575E6;  
    background: -webkit-linear-gradient(to right, #021B79, #0575E6); 
    background: linear-gradient(to right, #021B79, #0575E6);
    transition: all 1s ease; 
    cursor:pointer;
`
