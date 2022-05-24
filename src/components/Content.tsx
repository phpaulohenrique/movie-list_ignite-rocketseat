import { IGenreResponseProps, IMovieProps } from "../App";
import { MovieCard } from "./MovieCard";


interface IContentProps{
  selectedGenre: IGenreResponseProps,
  movies: IMovieProps[],
}

export function Content({selectedGenre, movies}: IContentProps) {
  // Complete aqui
  return(

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
  );
}