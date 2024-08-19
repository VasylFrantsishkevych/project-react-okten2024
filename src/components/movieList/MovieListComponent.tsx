import { movieService } from "@/services/movie.service";
import MovieListCardComponent from "../movieListCard/MovieListCardComponent";
import styles from './MovieList.module.css';
import PaginationComponent from "../pagination/PaginationComponent";
import { FC } from "react";
import { IMovieResponse } from "@/models";

type IProps = {
   // page: string;
   // genreId: string;
   movies: IMovieResponse;
}

const MovieListComponent:FC<IProps> = ({movies}) => {
   
   return (
      <section className={styles.movie_list}>
      {
          movies.results.map(movie => <MovieListCardComponent key={movie.id} movie={movie}/>)
      }
      <PaginationComponent currentPage={movies.page} totalPages={movies.total_pages}/>
      </section>
   );
};

export default MovieListComponent;