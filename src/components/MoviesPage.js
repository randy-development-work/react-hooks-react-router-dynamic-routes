import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";


function MoviesPage({ movies }) {
  // useRouteMatch returns a special object with information about
  // the currently matched route
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <MoviesList movies={movies} />
      {/* 
        we can use the current URL from the `match` object as part of the path;
        this will generate a url like "/movies/:movieId"
      */}
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
