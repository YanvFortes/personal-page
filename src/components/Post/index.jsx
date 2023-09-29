import styled from "styled-components"

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
const Button = styled.button`
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

const Post = ( {post} ) => {

    return(
        <PostStyled>
            <Image src={`img/posts/${post.id}/capa.png`} alt={post.title}/>
            <Title>{post.title}</Title>
            <Button>Read</Button>
        </PostStyled>
    )
}

export default Post