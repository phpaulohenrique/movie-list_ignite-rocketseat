import { IGenreResponseProps } from "../App";
import { Button } from "./Button";


interface IGenresProps{

  genres: IGenreResponseProps[],
  selectedGenre: number,
  onClickGenreBtn: (id: number) => void

};


export function SideBar({genres, selectedGenre, onClickGenreBtn}: IGenresProps ) {

  return(

    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickGenreBtn(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

  </nav> 
  );
}