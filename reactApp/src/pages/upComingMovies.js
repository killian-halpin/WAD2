import React from 'react';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from '../api/movies-api'; 

const UpcomingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

    if (isLoading) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
    }

    if (!data || !data.results) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>No upcoming movies found</div>;
    }

    const movies = data.results;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px' }}>Upcoming Movies</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {movies.map(movie => (
                    <li key={movie.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <div><strong>Title:</strong> {movie.title}</div>
                        <div><strong>ID:</strong> {movie.id}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingMoviesPage;
