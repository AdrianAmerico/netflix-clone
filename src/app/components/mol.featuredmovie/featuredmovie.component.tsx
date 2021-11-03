import * as React from 'react'
import { HorizontalTransparency, SectionStyled, Title, VerticalTransparency, MovieInfo, DivStyled, Description, AStyled, AWatchStyled, AListStyled, DivGenderStyled } from '.';

interface Props {
    movie: any | null
}

export const FeaturedMovie = ({ movie }: Props) => {
    const fristDate = new Date(movie.first_air_date)
    const genres = []

    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }

    return (
        <SectionStyled image={movie.backdrop_path}>
            <VerticalTransparency>
                <HorizontalTransparency>
                    <Title>
                        {movie.original_name}
                    </Title>
                    <MovieInfo>
                        <DivStyled color={"#46d369"}>
                            {movie.vote_average} pontos
                        </DivStyled>
                        <DivStyled>{fristDate.getFullYear()}</DivStyled>
                        <DivStyled>{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 && 's'}</DivStyled>
                    </MovieInfo>
                    <Description>
                        {movie.overview}
                    </Description>
                    <div style={{ margin: "15px 0" }}>
                        <AWatchStyled href={`/watch/${movie.id}`}>Assistir</AWatchStyled>
                        <AListStyled href={`list/add/${movie.id}`}>Minha Lista</AListStyled>
                    </div>
                    <DivGenderStyled>
                        <strong>Gêneros: {genres.join(', ')}</strong>
                    </DivGenderStyled>

                </HorizontalTransparency>
            </VerticalTransparency>

        </SectionStyled>
    )
}
