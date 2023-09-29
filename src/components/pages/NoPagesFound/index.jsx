import styled from "styled-components"
import Button from "../../Button"

const Container = styled.div`
    position: relative;
    text-align: center;
    background-color: #041833;
    color: #FFFFFF;
    padding: 0 1.5em 6.5em;
`
const Error404 = styled.span`
    display: block;
    color: #1875E8;
    font-family: 'Playfair Display', sans-serif;
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;
`
const Title = styled.h1`
    font-family: 'Playfair Display', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
`
const Text = styled.p`
    font-size: 1.5rem;
    line-height: 1.75rem;
`
const ButtonContainer = styled.div`
    text-align: start;
    margin-top: 3.5rem;
    margin-left: 30vw;

`
const DogPicture = styled.img`
    height: 25vw;
    position: absolute;
`
const WhiteSpace = styled.div`
    height: 40vh;
`

const NoPagesFound = () => {
    return(
        <Container>
            <Error404>404</Error404>
            <Title>Ops! Page not found.</Title>
            <Text>Are you sure that's what you were looking for?</Text>
            <Text> Wait a few moments and reload the page, or go back to the home page.</Text>
            <ButtonContainer>
                <Button>Back</Button>
            </ButtonContainer>
            <DogPicture src="/img/erro_404.png"/>
            <WhiteSpace/>
        </Container>
    )
}

export default NoPagesFound