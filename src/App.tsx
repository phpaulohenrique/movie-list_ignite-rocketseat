import { useEffect, useState } from 'react';
import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export interface IGenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {3333
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>({} as IGenreResponseProps);

  useEffect(() => {
    api.get<IGenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar
        genres={genres}
        selectedGenre={selectedGenreId}
        onClickGenreBtn={handleClickButton}
      />

      <div className="container">

        <Header
          selectedGenre={selectedGenre}
        
        /> 

        <Content
          selectedGenre={selectedGenre}
          movies={movies}
        />

      </div>


    </div>
  )
}