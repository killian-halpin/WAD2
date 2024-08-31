import React from 'react';
import { useQuery } from 'react-query';
import { getTV } from "../api/movies-api";

const tvPage = () => {
    const { data, error, isLoading, isError } = useQuery('discover', getTV);

    if (isLoading) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
    }

    const tvp = data.results;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ marginBottom: '20px' }}>TV Shows</h2>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tvp.map(tv => (
                    <li key={tv.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                        <div><strong>Title:</strong> {tv.name}</div>
                        <div><strong>ID:</strong> {tv.id}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default tvPage;