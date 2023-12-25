import React,{ useState }  from 'react'
import SendIcon from '@material-ui/icons/Send';
import {NewsContainer,NewsContainerCard,EmailContain,Button} from './Styles'
import axios from "axios"


const Index = () => {

    const [email,setEmail] = useState('');

    const handleSubscriber = async () =>{
        try {
            const res = await axios.post("http://localhost:5000/subscriber",{email:email})
            console.log(res);
        } catch(err){
            console.log(err)
        }
    };


    return (
        <NewsContainer>
            <NewsContainerCard>
                <h1>Inscrivez-vous pour recevoir des mises à jour sur nos evenement,
                    nos ateliers et plus encore :
                </h1>
                <EmailContain>
                    <input type='userEmail' name='email' placeholder="you@email.com" onChange={e=>setEmail(e.target.value)}/>
                    <Button onClick={handleSubscriber}><SendIcon /></Button>
                </EmailContain>
            </NewsContainerCard>
        </NewsContainer>
    )
}

export default Index
