import React from 'react'
import emailjs from 'emailjs-com'
import {MailerContainer,MailerCard,MailerWrap,MailerForm,Part1,Part2,MailerName,
    MailerEmail,MailerAttache,MailerMessage} from './style'

const index = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_j0lf0ze','template_svwr1ut',
        e.target,"user_p6Z8erkcnfbXKsrc63eXs").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
        <MailerContainer>
            <MailerCard>
                <MailerWrap>
                    <h1>Forme de depot</h1>
                    <MailerForm onSubmit={sendEmail}>
                        <Part1>
                            <MailerName>
                                <label>Nom</label>
                                <input type='text' name='name' placeholder="Nom" />
                            </MailerName>
                            <MailerEmail>
                                <label>Email</label>
                                <input type='userEmail' name='email' placeholder="Email" />
                            </MailerEmail>
                            <MailerAttache>
                                <input type="file" id="myFile" name="filename" />
                                <label>Attacher un fichier PDF</label>
                            </MailerAttache>
                        </Part1>
                        <Part2>
                            <MailerMessage>
                                <label>Message</label>
                                <textarea name='message' rows='4' placeholder="Message" />
                            </MailerMessage>
                            
                            <input type='submit' value='Envoyer' />
                        </Part2>
                    </MailerForm>
                </MailerWrap>
            </MailerCard>
        </MailerContainer>
    )
}

export default index
