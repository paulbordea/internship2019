using System;
using System.Collections.Generic;
using System.Linq;
using Cinema.DataAccess;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Services
{
    public class MoviesService : IMoviesService
    {
        private readonly CinemaContext _cinemaContext;
        public MoviesService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        //GET method
        public IEnumerable<Movie> GetMovies(DateTime date)
        {
            var query = (from movie in _cinemaContext.Movie
                join movieSchedule in _cinemaContext.MovieSchedule
                    on movie.Id equals movieSchedule.MovieId
                        where movieSchedule.Date == date
                select new Movie
                {
                    Id = movie.Id,
                    Name = movie.Name,
                    Description = movie.Description,
                    Actors = movie.Actors
                }).ToList();

            return query;
        }

        //GET by {id} method
        public ActionResult<Movie> GetMovie(int id)
        {
            var firstOrDefault = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            return firstOrDefault;
        }

        //POST method
        public void PostMovie(Movie movie)
        {
            if (_cinemaContext != null)
            {
                _cinemaContext.Movie.Add(movie);
                _cinemaContext.SaveChanges();
            }
        }

        //PUT method
        public void PutMovie(int id, [FromBody]Movie movie)
        {
            var entity = _cinemaContext.Movie.FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                entity.Id = movie.Id;
                entity.Name = movie.Name;
                entity.Description = movie.Description;
                entity.Actors = movie.Actors;
            }

            _cinemaContext.SaveChanges();
        }

        //DELETE method
        public void DeleteMovie(int id)
        {
            _cinemaContext.Movie.Remove(_cinemaContext.Movie.FirstOrDefault(e => e.Id == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
