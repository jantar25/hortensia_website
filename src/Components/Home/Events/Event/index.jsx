import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import {format } from 'timeago.js'
import Popup from '../../../Popup/index'
import { useState,useEffect } from "react"
import axios from "axios"
import {Container,Image,Info,Card,ImgContainer,IconContainer,Date,Title,Desc,
    Wrapper,PopImageContainer,PopImage,InfoContainer,PopTitle,PopDescription} from './style'



const Event = ({item}) => {

    const [trigButton,setTrigButton] = useState(false);
    const handleTrigger = () =>{
        setTrigButton(true)
    }
    const id = item._id;
    const [event,setEvent] = useState({});
    

    useEffect(()=>{
        const getEvent= async ()=>{
            try {
                const res = await axios.get("http://localhost:5000/events/find/" +id)
                setEvent(res.data);               
            } catch (error) {
                console.log(error)
            }
        }
        getEvent();
    },[id])
    return (
            <Container>
                    <Card onClick={handleTrigger}>
                        <ImgContainer>
                             <Image src={item.img}/>
                        </ImgContainer>
                        <Info>
                            <Title>{item.title}</Title>
                            <Desc>{item.description.split(' ').splice(0, 15).join(' ')}...</Desc>    
                        </Info>
                        <IconContainer>
                            <ThumbUpAltIcon style={{color :"white"}}/>
                            <Date>{format(item.createdAt)}</Date>
                        </IconContainer>
                    </Card>
                    <Popup trigger={trigButton} setTrigger={setTrigButton}>
                    <Wrapper>
                            <PopImageContainer>
                                <PopImage src={event.img} />
                            </PopImageContainer>
                            <InfoContainer>
                                <PopTitle>{event.title}</PopTitle>
                                <PopDescription>{event.description}</PopDescription>
                            </InfoContainer>
                    </Wrapper>
                    </Popup>
            </Container>
    )
}

export default Event