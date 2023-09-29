import { Link, useLocation } from "react-router-dom"
import styles from "./navLink.module.css"

const NavLink = ( {path, children} ) => {

    const location = useLocation()

    return (
        <Link className={`
            ${styles.link} 
            ${location.pathname === path ? styles.hover : ' '}
        `} to={path}>
            {children}
        </Link>
    )
}

export default NavLink