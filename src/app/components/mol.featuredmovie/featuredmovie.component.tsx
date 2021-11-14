import * as React from 'react'
import { InfoIcon, PlayIcon } from '..';
import { FeaturedBackground } from '../../../stories';
import { IMovieInfo } from '../../data';
import { useFavorite } from '../../hooks/useFavorite';
import { SnackBar } from '../mol.snackbar/snackbar.component';
import { AListStyled, AWatchStyled, Description, DivGenderStyled, DivStyled, MovieInfo, Title } from './featuredmovie.component.style';

interface Props {
    movie: IMovieInfo
}

export const FeaturedMovie = ({ movie }: Props) => {
    const { addFavorite } = useFavorite()
    const snackbarRef = React.useRef<any | null>(null);
    const firstDate = new Date(movie.first_air_date)
    const genres = []

    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }
    const { poster_path, original_name } = movie
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
            <div style={{ margin: "15px 0" }}>
                <AWatchStyled><PlayIcon /> Assistir</AWatchStyled>
                <AListStyled onClick={() => addFavorite({ poster_path, original_name }, snackbarRef)}>
                    <InfoIcon />
                    Minha Lista
                </AListStyled>
            </div>
            <DivGenderStyled>
                <strong>Gêneros: {genres.join(', ')}</strong>
            </DivGenderStyled>
            <SnackBar
                ref={snackbarRef}
                message="Item adicionado aos favoritos."
                type={"success"}
            />
        </FeaturedBackground>
    )
}
