import React from 'react';
import { useQuery } from 'react-query';
import { getTVGenres } from '../api/movies-api'; 

const TVGenrePage = () => {
    const { data, error, isLoading, isError } = useQuery('TvGenres', getTVGenres);

    if (isLoading) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
    }

    const genres = data.genres;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px' }}>TV Genres</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {genres.map(genres => (
                    <li key={genres.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <strong>{genres.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TVGenrePage;