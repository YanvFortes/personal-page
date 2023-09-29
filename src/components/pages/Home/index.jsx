import PostCard from "../../PostCard"
import posts from "../../../json/posts.json"
import styled from "styled-components"

const List = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    padding: 2em 0;
    margin-top: -4em;
`

const Home = () => {
    return (
        <> 
            <List>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </List>

        </>
    )
}

export default Home