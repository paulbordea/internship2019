using System;
using System.Collections.Generic;
using System.Linq;
using Cinema.DataAccess;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Services
{
    public class SeatsService : ISeatsService
    {
        private readonly CinemaContext _cinemaContext;
        public SeatsService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        public IEnumerable<Seat> GetSeats(int movieId, DateTime date)
        {
            //IEnumerable<bool> seatBools = new List<bool>();

            //var query = from seat in _cinemaContext.Seat
            //    join movieSchedule in _cinemaContext.MovieSchedule
            //        on seat.MovieId equals movieSchedule.MovieId
            //            where (seat.Date == movieSchedule.Date && seat.Time == movieSchedule.Time)
            //    select new
            //    {

            //    };


            //var listAsync = _cinemaContext.Seat.ToListAsync();

            //return seatBools;


            var query = _cinemaContext.Seat.Where(x => x.MovieId == movieId && x.Date == date).ToList();
            return query;
        }
    }
}
