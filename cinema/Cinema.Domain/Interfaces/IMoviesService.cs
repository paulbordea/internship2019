using System;
using System.Collections.Generic;
using System.Linq;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Domain.Interfaces
{
    public interface IMoviesService
    {
        IEnumerable<Movie> GetMovies(DateTime date);
        ActionResult<Movie> GetMovie(int id);
        void PostMovie(Movie movie);
        void PutMovie(int id, [FromBody] Movie movie);
        void DeleteMovie(int id);
    }
}
