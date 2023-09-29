import styled from "styled-components"

const BannerStyled = styled.section`
    align-items: center;
    background-color: #041833;
    display: flex;
    height: 548px;
    padding: 0 5em;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`
const Title = styled.h1`
    color: #FFFFFF;
    font-size: 4rem;
    font-weight: 700;
`
const Description = styled.p`
    color: #FFFFFF;
    font-size: 1.5rem;
    max-width: 50vw;
`
const Figure = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    height: 362px;
    width: 543px;
`
const Image = styled.img`
    border-radius: 256px;
    height: 256px;
    position: relative;
    left: 170px;
    top: 120px;
    width: 256px;
`

const Banner = ( {backgroundImage, title, text} ) => {
    return (
        <BannerStyled>
            <Container>
                <Title>{title}</Title>
                <Description>{text}</Description>
            </Container>
            <Container>
                <Figure $backgroundImage={backgroundImage}>
                    <Image src="img/Me.jpg" alt="Me" />
                </Figure>
            </Container>
        </BannerStyled>
    )
}

export default Banner