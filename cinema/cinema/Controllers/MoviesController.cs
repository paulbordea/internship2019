using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NLog.Fluent;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : Controller
    {
        private readonly IMoviesService _moviesService;
        public MoviesController(IMoviesService moviesService)
        {
            _moviesService = moviesService;
        }

        // GET: api/movies
        [HttpGet]
        public JsonResult GetMovies()
        {
            try
            {
                var movies= _moviesService.GetMovies();
                return Json(movies);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            try
            {
                return _moviesService.GetMovie(id);
            }
            catch (NullReferenceException exception)
            {
                Log.Error(string.Format("The movie with the following ID doesn't exist", id));
                throw exception;
            }
        }

        // POST api/movie
        [HttpPost]
        public void PostMovie(Movie movie)
        {
            try
            {
                _moviesService.PostMovie(movie);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // PUT api/movie/5
        [HttpPut("{id}")]
        public void PutMovie(int id, [FromBody]Movie movie)
        {
            try
            {
                _moviesService.PutMovie(id, movie);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public void DeleteMovie(int id)
        {
            try
            {
                _moviesService.DeleteMovie(id);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}
