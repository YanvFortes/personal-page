import { BrowserRouter, Route, Routes } from "react-router-dom"
import Initial from "./components/pages/Home"
import AboutMe from "./components/pages/AboutMe"
import Post from "./components/pages/Post"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DefaultPage from "./components/DefaultPage"

const AppRoute = () => {

    return (
        <>
            

            <BrowserRouter>
                <Navbar/>
            
                <Routes>
                    <Route path="/" element={<DefaultPage/>}>
                        <Route index element={<Initial/>}/>
                        <Route path="aboutMe" element={<AboutMe/>}/>
                        <Route path="posts/:id" element={<Post/>}/>
                    </Route>

                    <Route path="*" element={<h1>ERRO 404</h1>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
