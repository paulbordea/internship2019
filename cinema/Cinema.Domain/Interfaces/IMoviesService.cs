using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Domain.Interfaces
{
    public interface IMoviesService
    {
       List<Movie> GetMovies();
        ActionResult<Movie> GetMovie(int id);
        void PostMovie(Movie movie);
        void PutMovie(int id, [FromBody] Movie movie);
        void DeleteMovie(int id);
    }
}
