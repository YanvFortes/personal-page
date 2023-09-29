
import NavLink from "./NavLink"
import styled from "styled-components"

const NavbarStyled = styled.nav`
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    font-weight: 500;
    gap: 2em;
    justify-content: center;
    padding: 2em 0;
    `

const Navbar = () => {

    return (
        <NavbarStyled>
            <NavLink path="/">Home</NavLink>
            <NavLink path="/aboutMe">About me</NavLink>
        </NavbarStyled>
    )
}

export default Navbar