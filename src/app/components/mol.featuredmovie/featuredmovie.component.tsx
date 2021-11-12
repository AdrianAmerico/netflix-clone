import * as React from 'react'
import { InfoIcon, PlayIcon } from '..';
import { FeaturedBackground } from '../../../stories';
import { ICardItem, IMovieInfo } from '../../data';
import { AListStyled, AWatchStyled, Description, DivGenderStyled, DivStyled, MovieInfo, Title } from './featuredmovie.component.style';

interface Props {
    movie: IMovieInfo
}

export const FeaturedMovie = ({ movie }: Props) => {

    const firstDate = new Date(movie.first_air_date)
    const genres = []

    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }

    const addFavorite = (data: any) => {
        const { backdrop_path,
            original_title,
            poster_path } = data

        const testeJson = JSON.stringify({
            backdrop_path,
            original_title,
            poster_path
        })
    }

    return (
        <FeaturedBackground image={movie.backdrop_path}>
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
                <AListStyled onClick={() => addFavorite(movie)}><InfoIcon /> Minha Lista</AListStyled>
            </div>
            <DivGenderStyled>
                <strong>Gêneros: {genres.join(', ')}</strong>
            </DivGenderStyled>
        </FeaturedBackground>
    )
}
