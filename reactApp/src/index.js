import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import PublicPage from "./pages/publicPage";
import ProfilePage from "./pages/profilePage";
import MoviesPage from "./pages/moviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/siteHeader";
import SignUpPage from "./pages/signUpPage";
import UpComingMoviesPage from "./pages/upComingMovies";
import TVpage from "./pages/tvPage";
import MovieGenrePage from "./pages/movieGenrePage";
import TVGenrePage from "./pages/tvGenrePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <ul>
            <li>
              <Link to="/">Public</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upcomingmovies">Up Coming Movies</Link>
            </li>
            <li>
              <Link to="/tv">TV Shows</Link>
            </li>
            <li>
              <Link to="/moviegenres">Movie Genres Page</Link>
            </li>
            <li>
              <Link to="/tvgenres">TV Genres Page</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/upcomingmovies" element={<UpComingMoviesPage />} />
              <Route path="/tv" element={<TVpage />} />
              <Route path="/moviegenres" element={<MovieGenrePage />} />
              <Route path="/tvgenres" element={<TVGenrePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
