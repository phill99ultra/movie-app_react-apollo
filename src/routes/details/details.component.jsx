import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container, 
        Column, 
        Poster, 
        Title, 
        Subtitle, 
        Description} from './details.style';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            language
            rating
            title
            medium_cover_image
            description_intro
            isLiked @client
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`

const DetailsPape = () => {
    const {id} = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {id: parseInt(id)}
    });
    return(
        <Container>
            <Column>
                <Title>
                    {loading ? 'Loading...' : `${data?.movie?.title} ${data?.movie?.isLiked ? "❤️" : "😢"}`}
                </Title>
                <Subtitle>
                    Language:&nbsp;{data?.movie?.language}&nbsp;-&nbsp;Rating:&nbsp;{data?.movie?.rating}
                </Subtitle>
                <Description>
                    {data?.movie?.description_intro}
                </Description>
            </Column>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
        </Container>
    )
}

export default DetailsPape;