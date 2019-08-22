using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;

namespace Cinema.Domain.Interfaces
{
    public interface ISeatsService
    {
        IEnumerable<Seat> GetSeats(int movieId, DateTime date);
    }
}
