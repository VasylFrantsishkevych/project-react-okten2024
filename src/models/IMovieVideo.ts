export interface IMovieVideoResponse {
   id: number,
   results: IMovieVideo[],
}
export interface IMovieVideo {
   name: string,
   key: string,
   site: string,
   id: string,
}