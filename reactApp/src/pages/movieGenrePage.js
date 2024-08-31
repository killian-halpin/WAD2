import React from 'react';
import { useQuery } from 'react-query';
import { getMovieGenres } from '../api/movies-api'; 

const MovieGenrePage = () => {
    const { data, error, isLoading, isError } = useQuery('movieGenres', getMovieGenres);

    if (isLoading) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
    }

    const genres = data.genres;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px' }}>Movie Genres</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {genres.map(genre => (
                    <li key={genre.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <strong>{genre.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieGenrePage;