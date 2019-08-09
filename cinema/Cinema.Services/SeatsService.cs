using System.Collections.Generic;
using System.Threading.Tasks;
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

        //GET
        public Task<List<Seat>> GetSeats()
        {
            return _cinemaContext.Seat.ToListAsync();
        }
    }
}
