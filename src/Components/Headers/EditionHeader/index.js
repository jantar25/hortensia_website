import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Event1 from "../../../images/jelele.JPG"
import {Header,Title,HeaderImg} from './Styles'

const Head = () => {
    AOS.init({duration:2000});
    return (
        <div>
            <Header>
                <HeaderImg src={Event1} alt={Event1} />
                <Title data-aos="fade-right">JIELELE Edition</Title>
            </Header>
        </div>
    )
}

export default Head
