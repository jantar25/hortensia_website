import styled from "styled-components";

export const ProgramsContent = styled.section`
  background:#fff;
  position: relative;
`;

export const ProgramsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  @media screen and (max-width: 800px) {
    margin: 1rem;
  }
`;

export const ProgramsCard = styled.div`
  margin: 20px 10px 10px;
  height: 550px;
  width: 100%;
  border: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: whitesmoke;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  }
`;

export const ProgramsImgCntainer = styled.div`
position:absolute;
top:0;
width: 100%;
height: 70%;
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
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
`
export const ProgramsImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const DescriptionCntainer = styled.div`
position:absolute;
top:70%;
height: 30%;
width:100%;
overflow:hidden;
overflow-y:scroll;
margin-bottom:10px;
`

export const ProgramsTitle = styled.h2`
  position:absolute;
  top:50%;
  color: #fff;
  padding: 0 10px;
  font-size: clamp(1rem, 10vw, 3rem);
  font-weight: bold;
  text-shadow: 10px 10px 15px #000;
  z-index:3;
`;

export const ProgramsDescription = styled.p`
  text-align:center;
  padding: 20px;
  font-size: 18px;
  color: #003366;
  
`;
