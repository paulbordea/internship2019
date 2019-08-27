using System;
using System.Collections.Generic;
using System.Linq;
using Cinema.DataAccess;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Services
{
    public class MoviesService : IMoviesService
    {
        private readonly CinemaContext _cinemaContext;
        public MoviesService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        public List<Movie> GetMovies()
        {
           var movies = _cinemaContext.Movie.Include(x => x.MovieSchedule).ToList();
          //  var movies = _cinemaContext.Movie.ToList();

            return movies;
        }

        public ActionResult<Movie> GetMovie(int id)
        {
            var firstOrDefault = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            return firstOrDefault;
        }

        public void PostMovie(Movie movie)
        {
            if (_cinemaContext != null)
            {
                _cinemaContext.Movie.Add(movie);
                _cinemaContext.SaveChanges();
            }
        }

        public void PutMovie(int id, [FromBody]Movie movie)
        {
            var entity = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                entity.Id = movie.Id;
                entity.Title = movie.Title;
                entity.Description = movie.Description;
                entity.Actors = movie.Actors;
            }

            _cinemaContext.SaveChanges();
        }

        public void DeleteMovie(int id)
        {
            _cinemaContext.Movie.Remove(_cinemaContext.Movie.FirstOrDefault(e => e.Id == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
