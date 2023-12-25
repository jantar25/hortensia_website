import {Container,AddContainer,Button} from "./style"


const Event = (props) => {

    return (props.trigger)? (
        <Container>
            <AddContainer>
                <Button onClick={()=>props.setTrigger(false)}>CLOSE</Button>
            </AddContainer>
            {props.children}
        </Container>
    ) : "";
}

export default Event