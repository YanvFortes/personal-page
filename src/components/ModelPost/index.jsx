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
    height: 204px;
    z-index: -1;
`
const Title = styled.h2`
    align-items: center;
    display: flex;
    font-size: 4rem;
    justify-content: center;
    padding: 1em;
`
const Content = styled.div`
    padding: 3.5em 7.5em 4.5em;
    color: #444444;
`

const ModelPost = ( {children, coverPhoto, title} ) => {
    console.log(coverPhoto)
    return(
        <Container>
            <CoverPhoto style={{ backgroundImage: `url("${coverPhoto}")`}}/>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    )
}

export default ModelPost