import styled from "styled-components"

const FooterStyled = styled.footer`
    align-items: center;
    background-color: #041833;
    display: flex;
    justify-content: center;
    padding: 1em;
`

const Copyright = styled.p`
    color: #FFFFFF;
`

const Footer = () => {
    return(
        <FooterStyled>
            <Copyright>&copy; Developed by Yan</Copyright>
        </FooterStyled>
    )
}

export default Footer