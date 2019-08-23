using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;

namespace Cinema.Domain.Interfaces
{
    public interface ISeatsService
    {
        ArrayList GetSeats(int movieId, DateTime date);
    }
}
