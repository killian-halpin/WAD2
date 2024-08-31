import React from 'react';
import { useQuery } from 'react-query';
import { getTrending } from '../api/movies-api'; 

const PublicPage = () => {
  const { data, error, isLoading, isError } = useQuery('trending', getTrending);

  if (isLoading) {
    return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
  }

 
  if (isError) {
    return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
  }

  // Added as information was not being parsed in so app would still Run 
  const movies = data?.movies || [];  
  const tvShows = data?.tvShows || []; 
  const people = data?.people || [];   

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '20px' }}>Trending Now</h2>
      
      {/* Movies */}
      <div>
        <h3 style={{ marginBottom: '10px' }}>Trending Movies</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {movies.map(movie => (
            <li key={movie.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
              <div><strong>Title:</strong> {movie.title}</div>
              <div><strong>ID:</strong> {movie.id}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* TV Shows */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '10px' }}>Trending TV Shows</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {tvShows.map(show => (
            <li key={show.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
              <div><strong>Title:</strong> {show.name}</div>
              <div><strong>ID:</strong> {show.id}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* People */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '10px' }}>Trending People</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {people.map(person => (
            <li key={person.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
              <div><strong>Name:</strong> {person.name}</div>
              <div><strong>ID:</strong> {person.id}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PublicPage;
