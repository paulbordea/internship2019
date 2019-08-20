using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;

namespace Cinema.Domain.Interfaces
{
    public interface ISeatsService
    {
        Task<List<Seat>> GetSeats(MovieSchedule schedule);
    }
}
