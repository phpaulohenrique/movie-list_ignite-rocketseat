import {IGenreResponseProps } from "../App";

interface selectedGenreProps{
    selectedGenre: IGenreResponseProps;
}

export function Header({selectedGenre}: selectedGenreProps) {

    return(
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    );
}

