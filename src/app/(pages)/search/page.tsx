import MovieListComponent from '@/components/movieList/MovieListComponent';
import { movieService } from '@/services/movie.service';
import React, { FC } from 'react'

interface IProps {
   searchParams?: {
      page?: string,
      query: string,

   };
}

const SearchPage: FC<IProps> = async ({searchParams}) => {
   
   let movies;
   if (searchParams !== undefined) {
      movies = await movieService.searchMovies(searchParams?.page, searchParams?.query)
   } 
   
  return (
    <div>
      {
         movies && <MovieListComponent movies={movies}/>
      }
    </div>
  )
}

export default SearchPage