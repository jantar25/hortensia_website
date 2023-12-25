import styled from "styled-components";


export const BooksContent = styled.section`
    background: #fff;

  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin: 30px 50px;
    width: 80%;
    border-bottom: 2px solid #a36a00;
  }
`;

export const BooksTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin:30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
`;
export const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin:20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

`;

export const BookCard = styled.div`
width:70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
justify-self: center;
margin: 20px 70px;
padding: 20px;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
transition: all 0.5s ease-in-out;

`

export const BookImg = styled.img`
width:100%;
margin-bottom:10px;
`

export const BookDescription = styled.p`
text-align:center;
width:100%;
margin-bottom:10px;
`

export const BookBtn = styled.button`
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
`