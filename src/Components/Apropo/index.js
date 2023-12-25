import React from 'react'
import {Content,ContentWrap,Title,Description,TeamCardWrap,TeamCard,ImgWrap,Img,Descrip} from './Styles'
import Image1 from '../../images/1.JPG'
import Image2 from '../../images/2.JPG'
import Image3 from '../../images/3.JPG'

const index = () => {
    return (
        <Content>
            <ContentWrap>
                <Title>A propos</Title>
                <Description>HORTENSIA Organisation est une structure Artistique et humanitaire dont 
                    la Mission est de Communiquer pour pacifier en apportant a chacun et a 
                    tous la vraie paix et le vrai amour du coeur. </Description>
            </ContentWrap>
            <ContentWrap>
                <Title>Slogan</Title>
                <Description>Peace In Love</Description>
            </ContentWrap>
            <ContentWrap>
                <Title>Vision</Title>
                <Description>Un present et un avenir ou les relations des jeunes des differentes
                     cultures sont rendue plus humaines et plus proches. </Description>
            </ContentWrap>
            <ContentWrap>
                <Title>Domain</Title>
                <Description>
                    <ol>
                        <li>Art,culture et Education</li>
                        <li>Paix et Engagement</li>
                        <li>Entrepreneuriat social</li>
                    </ol>
                </Description>
            </ContentWrap>
            <ContentWrap>
                <Title>Departement</Title>
                <Description>
                    <ol>
                        <li>JELELE</li>
                        <li>BUSARA</li>
                        <li>CREATIVA</li>
                        <li>CESTRI</li>
                        <li>P-VOX</li>
                    </ol>
                </Description>
            </ContentWrap>
            <ContentWrap>
                <Title>Team</Title>
                <TeamCardWrap>
                    <TeamCard>
                        <ImgWrap>
                            <Img src={Image1} alt="Image1" />
                            <h3>Ikundji Twange Grace</h3>
                        </ImgWrap>
                        <Descrip>Co-Founder et Vice-Chairman</Descrip>
                    </TeamCard>
                    <TeamCard>
                        <ImgWrap>
                            <Img src={Image2} alt="Image2" />
                            <h3>Ikundji Eddy</h3>
                        </ImgWrap>
                        <Descrip>Coordonateur</Descrip>
                    </TeamCard>
                    <TeamCard>
                        <ImgWrap>
                            <Img src={Image3} alt="Image3" />
                            <h3>Ikundji Twange Grace</h3>
                        </ImgWrap>
                        <Descrip>CEO and Co-Founder</Descrip>
                    </TeamCard>
                </TeamCardWrap>
                
            </ContentWrap>         
        </Content>
    )
}

export default index
