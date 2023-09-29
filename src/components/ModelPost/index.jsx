import styled from "styled-components"

const Container = styled.article`
    color: #444444;
    position: relative;
`
const CoverPhoto = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .3;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
`
const Title = styled.h2`
    align-items: center;
    display: flex;
    font-size: 4rem;
    padding: .5em 9em;
`
const Content = styled.div`
    padding: 2.5em 7.5em 4.5em;
`

const ModelPost = ( {children, coverPhoto, title} ) => {
    return(
        <Container>
            <CoverPhoto style={{ backgroundImage: `url(${coverPhoto})` }}/>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    )
}

export default ModelPost