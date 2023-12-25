import styled from "styled-components"

export const Container = styled.div`
position:fixed;
top:0;
left:0;
height: 100vh;
width:100%;
z-index:999;
background:whitesmoke;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export const AddContainer = styled.div`
position:relative;
padding:30px;
width:80%;
display:flex;
align-items:center;
justify-content:space-between;
`

export const Button = styled.button`
position:absolute;
top:90px;
right:20px;
padding:15px;
background:white;
border:3px solid orange;
cursor:pointer;
font-weight:700;
&: hover{
    background:whitesmoke;
}
`