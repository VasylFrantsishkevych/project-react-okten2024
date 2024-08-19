import { IGenresList, IMovieInfo, IMovieResponse, IMovieVideoResponse } from "@/models";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.TOKEN
    }  
}

const movieService = {
    getMovies: async (page: string = '1' ): Promise<IMovieResponse> => {
        let movies = await fetch(`${process.env.API_ALL_MOVIES_URL}?page=${page}`, options).then(value => value.json())
        return movies;
    },
    getMoviesByGenre: async (page: string , genreId: string): Promise<IMovieResponse> => {
        let movies = await fetch(`${process.env.API_ALL_MOVIES_URL}?page=${page}&with_genres=${genreId}`, options).then(value => value.json())
        return movies;
    },
    getMoviesById: async (id: number): Promise<IMovieInfo> => {
        let movie = await fetch(process.env.MOVIE_BY_ID_URL + '/' + id, options).then(value => value.json())
        return movie;
    },
    getVideoById: async (id: number): Promise<IMovieVideoResponse> => {
        let videos = await fetch(`${process.env.MOVIE_BY_ID_URL}/${id}/videos`, options).then(value => value.json())
        return videos;
    },
    getGenres: async (): Promise<IGenresList> => {
        let genres = await fetch(process.env.GENRE_LIST_URL, options).then(value => value.json())
        return genres;
    },
    searchMovies: async (page: string = '1', searchData: string): Promise<IMovieResponse> => {
        let movies = await fetch(`${process.env.SEARCH_URL}?query=${searchData}&page=${page}`, options).then(value => value.json())
        return movies;
    }
}

export {
    movieService
}