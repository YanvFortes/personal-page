import styled from "styled-components"

const ButtonStyled = styled.button`
    background-color: #1875E8;
    border: 3px solid transparent;
    border-radius: 24px;
    color: #FFFFFF;
    cursor: pointer;
    padding: .5em 1.25em;
    transition: .4s border;

    &:hover {
        border: 3px solid #041833;
    }
`

const Button = ( {children} ) => {
    return(
        <ButtonStyled>{children}</ButtonStyled>
    )
}

export default Button 