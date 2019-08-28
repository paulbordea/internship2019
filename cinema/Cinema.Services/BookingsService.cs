using System;
using System.Collections.Generic;
using System.Linq;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Cinema.DataAccess;

namespace Cinema.Services
{
    public class BookingsService : IBookingsService
    {
        private readonly CinemaContext _cinemaContext;
        public BookingsService(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        public List<Booking> GetBookings()
        {
            return _cinemaContext.Booking.OrderByDescending(b => b.Date).ToList();
        }

        public void InsertBooking(BookingInfo bookingInfo)
        {
            var bookingMap = new Booking();
            bookingMap.MovieId = bookingInfo.MovieId;
            bookingMap.UserId = bookingInfo.UserId;
            bookingMap.Date = DateTime.Now;

            if (_cinemaContext != null)
            {
                _cinemaContext.Booking.Add(bookingMap);
                _cinemaContext.SaveChanges();
            }
        }

        public void DeleteBooking(int id)
        {
            _cinemaContext.Booking.Remove(_cinemaContext.Booking.FirstOrDefault(e => e.Id == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
