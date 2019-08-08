using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public MovieController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        // GET: api/movie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovie()
        {
            var listAsync = _cinemaContext.Movie.ToListAsync();
            return await listAsync;
        }

        // GET api/movies/5
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            var firstOrDefault = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            return firstOrDefault;
        }

        // POST api/movies
        [HttpPost]
        public void PostMovie([FromBody] Movie movie)
        {
            if (_cinemaContext != null)
            {
                _cinemaContext.Movie.Add(movie);
                _cinemaContext.SaveChanges();
            }
        }

        // PUT api/movies/5
        [HttpPut("{id}")]
        public void PutMovie(int id, [FromBody]Movie movie)
        {
            var entity = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                entity.Id = movie.Id;
                entity.Name = movie.Name;
                entity.Date = movie.Date;
            }

            _cinemaContext.SaveChanges();
        }

        // DELETE api/movies/5
        [HttpDelete("{id}")]
        public void DeleteMovie(int id)
        {
            _cinemaContext.Movie.Remove(_cinemaContext.Movie.FirstOrDefault(e => e.Id == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
