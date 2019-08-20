using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Remotion.Linq.Clauses;

namespace Cinema.Services
{
    public class SeatsService : ISeatsService
    {
        private readonly CinemaContext _cinemaContext;
        public SeatsService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        //GET
        public IEnumerable<bool> GetSeats(MovieSchedule schedule)
        {
            IEnumerable<bool> seatBools = new List<bool>();

            var query = from seat in _cinemaContext.Seat
                join movieSchedule in _cinemaContext.MovieSchedule
                    on seat.MovieId equals movieSchedule.MovieId
                        where (seat.Date == movieSchedule.Date && seat.Hour == movieSchedule.Hour)
                select new
                {

                };

            //bool[] seatBools;

            var listAsync = _cinemaContext.Seat.ToListAsync();

            return seatBools;
        }
    }
}
