using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly IMoviesService _movieService;
        public MovieController(IMoviesService movieService)
        {
            _movieService = movieService;
        }

        // GET: api/movie
        [HttpGet]
        public Task<List<Movie>> GetMovies()
        {
            return _movieService.GetMovies();
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            return _movieService.GetMovie(id);
        }

        // POST api/movie
        [HttpPost]
        public void PostMovie([FromBody] Movie movie)
        {
            _movieService.PostMovie(movie);
        }

        // PUT api/movie/5
        [HttpPut("{id}")]
        public void PutMovie(int id, [FromBody]Movie movie)
        {
            _movieService.PutMovie(id, movie);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public void DeleteMovie(int id)
        {
            _movieService.DeleteMovie(id);
        }
    }
}
