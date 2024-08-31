// export const getMovieDetails = async (movieId) => {
//   const response = await fetch(
//       `https://api.themoviedb.org/3/movie/{movieId}?7fb718904df4f53e83d5e6b34db3cf1c=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US`
//   )
//   return response.json();
// };


export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&page=1&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };

  export const getMovieGenres = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&include_adult=false&page=1`
    )
    return response.json();
  };

  export const getTV = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };

  export const getTVGenres = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };


  export const getTrending = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=7fb718904df4f53e83d5e6b34db3cf1c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };


  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

