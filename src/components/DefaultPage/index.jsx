import Banner from "../Banner"
import { Outlet } from "react-router-dom"

const DefaultPage = () => {
    return(
        <main>
            <Banner
                backgroundImage="img/color_circle.png"
                title="Hello World!"
                text="Welcome to my personal space, I'm Yan Fortes, Front-end Developher, here I share my projects!"
            />

            <Outlet/>
        </main>
    )
}

export default DefaultPage