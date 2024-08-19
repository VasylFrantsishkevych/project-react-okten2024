import { IMovieInfo } from "@/models";
import { FC } from "react";
import styles from './MovieInfo.module.css';
import Image from 'next/image';
import StarsRating from "../starRating/starRating";
import PosterPreviewComponent from "../poster/PosterPreviewComponent";

type IProps = {
   movie: IMovieInfo
}

const MovieInfoComponent: FC<IProps> =  ({movie}) => {
   const { 
      backdrop_path,
      original_title,
      genres,
      overview,
      poster_path,
      runtime,
      release_date,
      vote_average,
      vote_count,
      production_countries,
      homepage,
      number_of_seasons,
   } = movie;
   
   return (
      <div className={styles.movie_details}>
         <div
                className={styles.movie_details_banner}
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}
            >
                <div className={styles.details_container}>
                    <div className={styles.movie_poster}>
                    <PosterPreviewComponent sizeImage={'/w300'} poster_path={poster_path} alt={original_title} width={300} height={300}/>
                    </div>
                    <div className={styles.movie_info}>
                        <div>
                            <h1>{original_title}</h1>
                            <div className={styles.movie_details_genre}>
                                {
                                    genres.map(({id, name}) =>
                                        <span key={id}>{name}</span>
                                    )
                                }
                            </div>
                            <div className={styles.movie_details_description}>
                                <p>Data: <span>{release_date}</span></p>
                                {number_of_seasons && <p>Seasons: <span>{number_of_seasons}</span></p>}
                                {runtime && <p>Time: <span>{runtime} min.</span></p>}
                                <p>Country: {
                                    production_countries.map(({iso_3166_1}, i) =>
                                        <span key={i}>{iso_3166_1}{i < production_countries.length - 1 && ','}</span>
                                    )
                                }</p>
                                <p>{overview}</p>
                            </div>
                        </div>
                        <div className={styles.details_container_bottom}>
                            <div className={styles.homepage}>
                                <a href={homepage}>Homepage</a>
                            </div>
                            <div className={styles.container_rating}>
                                <div className={styles.container_rating_stars}>
                                    <p>Rate the movie:</p>
                                    <StarsRating/>
                                </div>
                                <div className={styles.votes}>
                                    <p>Vote average: <span>{vote_average.toFixed(1)}</span></p>
                                    <p>Vote count: <span>{vote_count}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
   );
};

export default MovieInfoComponent;