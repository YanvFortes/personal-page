import ModelPost from "../../ModelPost"
import styled from "styled-components"

const Title = styled.h3`
    font-size: 2.5rem;
    margin-bottom: 2em;
`
const Text = styled.p`
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
`
const ProfilePicture = styled.img`
    border-radius: 16px;
    float: right;
    margin-bottom: .5rem;
    margin-left: 1.5rem;
    width: 40vw;
`

const AboutMe = () => {
    return (
        <ModelPost
            title="AboutMe"
            coverPhoto="/img/sobre_mim_capa.png"
        >    
            <Title>Hello, I'm Yan Fortes!</Title>
            <ProfilePicture
                src="img/I.JPG"
                alt="About Me Photo"
            />    
            <Text>
                Sharing a bit of my journey in the tech world! 💻🚀 In 2018, while attending high school and a technical IT course, I immersed myself in the vast world of web development. Although the course covered various languages, it was at the intersection of HTML, CSS, JS, Tailwind, and React that I found my true passion.
            </Text>
            <Text>
                Since then, I've dedicated countless hours to mastering these technologies, always seeking to improve my skills. Being a junior frontend developer allows me to explore creativity and logic when creating attractive and functional interfaces. Each project is a learning opportunity, where I can apply my knowledge to overcome challenges and provide efficient solutions.
            </Text>
            <Text>
                I firmly believe in the power of collaboration and knowledge sharing within the development community. I'm looking forward to continuing to grow, contribute, and, most importantly, turn my passion into innovation. The future in the web development field is bright, and I'm ready to be part of this exciting journey! 
            </Text>
        </ModelPost>
    )
}

export default AboutMe