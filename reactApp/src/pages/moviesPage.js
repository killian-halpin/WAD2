import React from 'react';
import { useQuery } from 'react-query';
import { getMovies } from "../api/movies-api";

const MoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('discover', getMovies);

    if (isLoading) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
    }

    const movie = data.results;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px' }}>Movies</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {movie.map(movie => (
                    <li key={movie.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <div><strong>Title:</strong> {movie.title}</div>
                        <div><strong>ID:</strong> {movie.id}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesPage;
