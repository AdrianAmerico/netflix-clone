import * as React from 'react'
import { HorizontalTransparency, SectionStyled, Title, VerticalTransparency, MovieInfo, DivStyled, Description, AStyled, AWatchStyled, AListStyled, DivGenderStyled } from '.';
import { IMovie, IMovieInfo } from '../../data/request.component.type';
import { InfoIcon } from '../mol.infoicon';
import { PlayIcon } from '../mol.playicon';

interface Props {
    movie: IMovieInfo
}

export const FeaturedMovie = ({ movie }: Props) => {

    const firstDate = new Date(movie.first_air_date)
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
                        <DivStyled>{firstDate.getFullYear()}</DivStyled>
                        <DivStyled>{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 && 's'}</DivStyled>
                    </MovieInfo>
                    <Description>
                        {movie.overview}
                    </Description>
                    <div style={{ margin: "15px 0" }} >
                        <AWatchStyled href={`/watch/${movie.id}`}><PlayIcon /> Assistir</AWatchStyled>
                        <AListStyled href={`list/add/${movie.id}`}><InfoIcon /> Minha Lista</AListStyled>
                    </div>
                    <DivGenderStyled>
                        <strong>Gêneros: {genres.join(', ')}</strong>
                    </DivGenderStyled>

                </HorizontalTransparency>
            </VerticalTransparency>
        </SectionStyled>
    )
}
