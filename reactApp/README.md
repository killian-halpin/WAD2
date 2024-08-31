This archive contains the code demonstrating a custom solution for protected routes and authentication in a React app. 

# Assignment 2 - Web API.

Name: Killian Halpin

## Features.

 
 + Feature 1: Added Upcoming Movies page 
 + Feature 2: Added TV Shows page (Does not display the title of the tv show just the ID)
 + Feature 3: Added a movies genre page 
 + Feature 4: Added a TV genre page 
 + Feature 5: Changed the styling so the pages are displayed in a nicer fashion
 + Feature 6: Attempted to add trending movies, tv shows and people to the public page however this didn't work 
 + Feature 7: Added the login and signup buttons to the site header
 + Feature 8: All added pages are also now protected

 I wanted to add more information about the movies as well however I could not get this to work. 
 
## Setup requirements.

Realised after I commited to git that my TMDB key is in one of the files had to regenerate key after demo as a precaution, may need to add in your tmdb key. 

## API Configuration

This is the way the .env file should look for the movies-api file, as this is needed for login and signup. 


_____________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

All pages are getting the information from the tmdb website still. 
However the login and register are coming from the backend API. Will demonstrate this using postman in the video demo. 

## Security and Authentication

<!-- <Route path="/movies" element={<MoviesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/upcomingmovies" element={<UpComingMoviesPage />} />
              <Route path="/tv" element={<TVpage />} />
              <Route path="/moviegenres" element={<MovieGenrePage />} />
              <Route path="/tvgenres" element={<TVGenrePage />} /> -->
            
These are all the protected routes in the app. 

Other security includes the passwords being salted and hashed. 

## Integrating with React App

App was linked with the API by following the lab steps on tutors. 

## Independent learning (if relevant)

(https://developer.themoviedb.org/reference/) - This was used to get all endpoints from the tmdb site. 
https://www.youtube.com/watch?v=1qVPVLpvd00 - Watched this video to get some information about styling the app 
https://legacy.reactjs.org/docs/dom-elements.html#style - Again used for the styling of the project 
https://wtwerner.medium.com/adding-login-logout-signup-to-a-navbar-with-react-and-redux-729f806258bb - Read this article about adding login and signup to the header. 

