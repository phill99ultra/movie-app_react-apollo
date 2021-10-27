import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://movie-gql-server.herokuapp.com/',
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, {id, isLiked}, {cache}) => {
                cache.modify(
                    {
                        id: `Movie:${id}`, 
                        fields: {isLiked: (isLiked) => !isLiked}
                    }
                )
            }
        }
    }
});

export default client;