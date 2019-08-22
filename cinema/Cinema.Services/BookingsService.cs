using System.Collections.Generic;
using System.Linq;
using Cinema.Domain.Interfaces;
using System.Threading.Tasks;
using Cinema.Domain.Models;
using Cinema.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Services
{
    public class BookingsService : IBookingsService
    {
        private readonly CinemaContext _cinemaContext;
        public BookingsService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        //GET
        public List<Booking> GetBookings()
        {
            return _cinemaContext.Booking.ToList();
        }
    }
}
