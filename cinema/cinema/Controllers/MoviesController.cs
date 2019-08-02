using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cinema.Models;
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

        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movies>>> GetMovies()
        {
            return await _cinemaContext.Movies.ToListAsync();
        }
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult<Movies> GetMovie(int id)
        {
            return _cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Movies movie)
        {
            _cinemaContext.Movies.Add(movie);
            _cinemaContext.SaveChanges();
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Movies movie)
        {
            var entity = _cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id);
            entity.MovieId = movie.MovieId;
            entity.MovieName = movie.MovieName;
            entity.MovieDate = movie.MovieDate;
            _cinemaContext.SaveChanges();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _cinemaContext.Movies.Remove(_cinemaContext.Movies.FirstOrDefault(e => e.MovieId == id));
            _cinemaContext.SaveChanges();
        }
    }
}
