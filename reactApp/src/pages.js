import React from 'react';
import { useQuery } from 'react-query';
import { getMovies } from "./api/movies-api";
import { getUpcomingMovies } from '../api/movies-api';
//import { getMovieDetails } from '../api/movies-api';
import { getTV } from './api/movies-api';
import { getMovieGenres } from './api/movies-api';
import { getTVGenres } from './api/movies-api';
import { getTrending } from './api/movies-api';

export const PublicPage = () => {
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


 export const Movies = () => {
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
 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }

export const UpcomingMoviesPage = () => {
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
          <ul style={{ listStyleType: 'none', padding: '0' }}>
              {movies.map((movie) => (
                  <li key={movie.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                      <strong>{movie.title}</strong><br />
                      (ID: {movie.id})
                  </li>
              ))}
          </ul>
      </div>
  );
};

export const tvPage = () => {
  const { data, error, isLoading, isError } = useQuery('discover', getTV);

  if (isLoading) {
      return <div style={{ textAlign: 'center', fontSize: '1.5em' }}>Loading...</div>;
  }

  if (isError) {
      return <div style={{ textAlign: 'center', fontSize: '1.5em', color: 'red' }}>Error: {error.message}</div>;
  }

  const tv = data.results;

  return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ marginBottom: '20px' }}>TV Shows</h2>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
              {tv.map(tv => (
                  <li key={tv.id} style={{ marginBottom: '15px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                      <div><strong>Title:</strong> {tv.name}</div>
                      <div><strong>ID:</strong> {tv.id}</div>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export const MovieGenrePage = () => {
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

export const TVGenrePage = () => {
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
              {genres.map(genre => (
                  <li key={genre.id} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                      <strong>{genre.name}</strong>
                  </li>
              ))}
          </ul>
      </div>
  );
};


 

            

 