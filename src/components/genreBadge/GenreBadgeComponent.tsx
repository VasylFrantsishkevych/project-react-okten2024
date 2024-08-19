import { IGenre } from "@/models";
import Link from "next/link";
import { FC } from "react";
import styles from './GenreBadge.module.css';

type IProps = {
   genre: IGenre;
}

const GenreBadgeComponent: FC<IProps> = ({genre}) => {
   const {id, name} = genre;
   
   return (
      <Link href={{pathname: '/movie', query: {page: 1, genreId: id}}} className={styles.link}>
         <span className={styles.genre}>{name}</span>
      </Link>
      
   );
};

export default GenreBadgeComponent;