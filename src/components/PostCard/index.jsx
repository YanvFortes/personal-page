import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "../Button"

const PostStyled = styled.div`
    align-items: center;
    box-shadow: 2px 2px 6px #00000080;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    height: 293px;
    transition: transform .2s;
    width: 282px;
    z-index: 999;

    &:hover {
        transform: translate(0, -1em);
    }
`
const Image = styled.img`
    height: 153px;
    width: 282px;
`
const Title = styled.h3`
    font-size: 1.2rem;
    line-height: 1em;
    text-align: center;
`

const PostCard = ( {post} ) => {

    return(
        <PostStyled>
            <Image src={`img/posts/${post.id}/capa.png`} alt={post.title}/>
            <Title>{post.title}</Title>
            <Link to={`/posts/${post.id}`}>
                <Button>Read</Button>
            </Link> 
        </PostStyled>

    )
}

export default PostCard