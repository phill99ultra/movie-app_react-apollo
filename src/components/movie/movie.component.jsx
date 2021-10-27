import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Poster } from './movie.style';
import { gql, useMutation } from '@apollo/client';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`


const Movie = ({ id, bg, isLiked }) => {
    const [setLikeMovie] = useMutation(LIKE_MOVIE, {
        variables: {
            id: parseInt(id),
            isLiked
        }
    });
    return(
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={bg}/>
            </Link>
            <button onClick={setLikeMovie}>
                {isLiked ? 'Liked' : "Doesn't liked"}
            </button>
        </Container>
    )
}

export default Movie;