import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Container,
        Header,
        Title,
        Subtitle,
        Loading,
        Movies
    } from './home.style';
import Movie from '../../components/movie/movie.component';

const GET_MOVIES = gql`
    query {
        movies{
            id
            medium_cover_image
            isLiked @client
        }
    }
`

const HomePape = () => {
    const { loading, data } = useQuery(GET_MOVIES);
    return (
        <Container>
            <Header>
                <Title>Movie App</Title>
                <Subtitle>Database made on React, Apollo, GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Загрузка...</Loading>}
            {!loading && data?.movies && (
                <Movies>
                    {
                        data.movies.map(
                            movie => <Movie 
                                key={movie.id} 
                                id={movie.id}
                                bg={movie.medium_cover_image}
                                isLiked={movie.isLiked}
                                />
                        )
                    }
                </Movies>
            )}
        </Container>
    );
}

export default HomePape;