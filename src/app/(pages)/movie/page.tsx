import React from 'react';
import MovieListComponent from '@/components/movieList/MovieListComponent';
import GenresComponent from '@/components/genres/GenresComponent';
import { IMovieResponse } from '@/models';
import { movieService } from '@/services/movie.service';

interface Params {
   searchParams: {
       page: string;
       genreId: string;
   }
}

const MoviesPage = async ({searchParams: {page, genreId}}: Params) => {

    let movies: IMovieResponse;
    if (genreId === undefined) {
        movies = await movieService.getMovies(page)
    } else {
        movies = await movieService.getMoviesByGenre(page, genreId)
    }

    return (
        <main>
            <GenresComponent/>
            <MovieListComponent movies={movies}/>
        </main>
    );
};

export default MoviesPage;