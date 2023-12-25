import {Container,Popular,Head} from './Styles'
import Event from './Event/index'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


const PopularsItems = () => {
    const [events,setEvents] = useState([]);

    useEffect(()=>{
        const getEvents= async ()=>{
            try {
                const res = await axios.get("http://localhost:5000/events/?new=true")
                setEvents(res.data);

            } catch(err){
                console.log(err)
            }
        };
        getEvents();  
    },[])



    return (
        <Container>
            <Head>Nos Evenements</Head>
            <Popular>
            {events.slice(0,3).map((item)=>(<Event item={item} key={item._id} />))}
            </Popular>
        </Container>
    )
}

export default PopularsItems