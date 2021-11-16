import { useEffect, useState } from 'react';
import { api } from '../services/api';

import { MovieCard } from './MovieCard';
import '../styles/content.scss';


interface contentProps {
  genresId: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ genresId }: contentProps) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${genresId}`).then(response => {
      setMovies(response.data);
    })
  }, [genresId]);


  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}