import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface HeaderProps {
    genresId: number;
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export function GenreHeader({ genresId }: HeaderProps) {
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${genresId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [genresId]);


    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}