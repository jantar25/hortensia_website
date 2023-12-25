import React,{useEffect,useState,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {SliderSection,SliderWrapper,
    HeroSlide,HeroSlider,HeroImage,HeroContent,
    SliderButton,PrevArrow,NextArrow,SliderButtonPrev,
    SliderButtonNext,AboutSvg} from './Styles'

const Slider = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;
    const timeout=useRef(null);
    useEffect(()=>{
        const nextSlide=()=>{
        setCurrent(current=== length-1? 0 : current+1)};
        timeout.current = setTimeout(nextSlide,10000);
        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    },[current,length])
    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current=== length-1? 0 : current+1);
        console.log(current);
    }
    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }
        setCurrent(current=== 0? length-1 : current-1);
        console.log(current);
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null
    }

    AOS.init({duration:2000});
    return (
        <SliderSection>
            <SliderWrapper>
                 {slides.map((slide,index)=>{
                     return(
                         <HeroSlide key={index}>
                             {index===current && (
                                <HeroSlider>
                                 <HeroImage src={slide.image} alt={slide.alt} />
                                 <HeroContent>
                                     <h3>{slide.title}</h3>
                                     <h2>{slide.jingle}</h2>
                                     <h1 data-aos="fade-right">{slide.departement}</h1>
                                     <p>{slide.comment}</p>
                                 </HeroContent>
                             </HeroSlider>
                             )}    
                         </HeroSlide>
                     )
                 })}
                 <SliderButton>
                    <SliderButtonPrev>
                        <PrevArrow onClick={prevSlide} />
                     </SliderButtonPrev>
                     <SliderButtonNext>
                        <NextArrow onClick={nextSlide} />
                     </SliderButtonNext>
                 </SliderButton>
            </SliderWrapper>
            <AboutSvg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" 
                fillOpacity="1" d="M0,256L80,213.3C160,171,320,85,480,90.7C640,96,800,192,960,197.3C1120,
                203,1280,117,1360,74.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,
                0,80,0L0,0Z"></path>
            </svg>
            </AboutSvg>
        </SliderSection>

    )
}

export default Slider
