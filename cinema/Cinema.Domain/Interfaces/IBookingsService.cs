using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;

namespace Cinema.Domain.Interfaces
{
    public interface IBookingsService
    {
        Task<List<Booking>> GetBookings();
    }
}
