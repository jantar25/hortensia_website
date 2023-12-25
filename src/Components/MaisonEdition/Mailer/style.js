import styled from "styled-components";


export const MailerContainer = styled.section`
display:flex;
justify-content:center;
align-items:center;
`

export const MailerCard = styled.div`
padding:1rem;
margin:2rem;
background:#003366;
width:70%;
color:#000;
border-radius:5px;
`
export const MailerWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const MailerForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-row: 1fr;
align-items: center;
justify-content: center;

@media screen and (max-width: 760px) {
  grid-template-columns: 1fr;
}
`

export const Part1 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
padding:10px;
`

export const Part2 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
padding:10px;

input{
  width:100%;
  padding:5px 30px;
  font-size:20px;
  color:white;
  background:#006400;
  outlined:0;
  border:0;
  border-radius:10px;
  &:hover {
    background:#228B22;
  }
}
`
export const MailerName = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:10px;

input{
  width:100%;
  padding:5px 30px; 
}
`
export const MailerEmail = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:10px;

input{
  width:100%;
  padding:5px 30px; 
}
`
export const MailerAttache = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:10px;
`
export const MailerMessage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:10px;

input{
  width:100%;
}
`