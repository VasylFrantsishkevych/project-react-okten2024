'use client'

import { createPages } from "@/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import styles from './Pagination.module.css';

interface IProps {
   totalPages: number;
   currentPage: number;
}


const PaginationComponent: FC<IProps> = ({totalPages, currentPage}) => {

   const searchParams = useSearchParams();
   const params = new URLSearchParams(searchParams);
   const page = Number(params.get('page'))
   const genreId = params.get('genreId')
   const query = params.get('query')
   
   const setQuery = 
      (name: string, value: string) => {
        params.set(name, value)
        params.delete('page')
   
        return params.toString()
      }
   
      
   const pages: Array<number> = [];
   createPages(pages, totalPages, currentPage)
   
   return (
         <div className={styles.paginator}>
            <Link href={
                  genreId ? genreId !== null ? `?page=${page - 1}&${setQuery('genreId', genreId)}` : `?page=${page - 1}`
                  :
                  query !== null ? `?page=${page - 1}&${setQuery('query', query)}` : `?page=${page + 1}`
               }>
               <button className={styles.button}>
                  Prev
               </button>
            </Link>
            {
                pages.map((page, index) => 
                  <Link href={
                     genreId ? genreId !== null ? `?page=${page}&${setQuery('genreId', genreId)}` : `?page=${page}` 
                     :
                     query !== null ? `?page=${page}&${setQuery('query', query)}` : `?page=${page}`
                     } key={index}>
                     <button className={currentPage === page ? styles.current_page : styles.page}>
                           {page}
                     </button>
                  </Link> )
            }
            <Link href={
               genreId ? genreId !== null ? `?page=${page + 1}&${setQuery('genreId', genreId)}` : `?page=${page + 1}`
               :
               query !== null ? `?page=${page + 1}&${setQuery('query', query)}` : `?page=${page + 1}`
               // genreId !== null ? `?page=${page + 1}&${setQuery('genreId', genreId)}` : `?page=${page + 1}`
               }>
               <button className={styles.button}>
                  Next
               </button>
            </Link>
        </div>
   );
};

export default PaginationComponent;