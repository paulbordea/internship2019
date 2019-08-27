using System.Collections.Generic;
using Cinema.Domain.Models;

namespace Cinema.Domain.Interfaces
{
    public interface IBookingsService
    {
        List<Booking> GetBookings();
        void InsertBooking(BookingInfo info);
        void DeleteBooking(int id);
    }
}
