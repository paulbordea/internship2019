using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public MoviesController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        // GET: api/movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movies>>> GetMovies()
        {
            var listAsync = _cinemaContext.Movies.ToListAsync();
            return await listAsync;
        }

        // GET api/movies/5
        [HttpGet("{id}")]
        public ActionResult<Movies> GetMovie(int id)
        {
            var firstOrDefault = _cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id);
            return firstOrDefault;
        }

        // POST api/movies
        [HttpPost]
        public void PostMovie([FromBody] Movies movie)
        {
            if (_cinemaContext != null)
            {
                _cinemaContext.Movies.Add(movie);
                _cinemaContext.SaveChanges();
            }
        }

        // PUT api/movies/5
        [HttpPut("{id}")]
        public void PutMovie(int id, [FromBody]Movies movie)
        {
            var entity = _cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id);
            if (entity != null)
            {
                entity.MovieId = movie.MovieId;
                entity.MovieName = movie.MovieName;
                entity.MovieDate = movie.MovieDate;
            }

            _cinemaContext.SaveChanges();
        }

        // DELETE api/movies/5
        [HttpDelete("{id}")]
        public void DeleteMovie(int id)
        {
            _cinemaContext.Movies.Remove(_cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
