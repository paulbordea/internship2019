using System;

namespace Cinema.Domain.Models
{
    public class BookingInfo
    {
        public int MovieId { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }

        public int[] SeatsList { get; set; }

    }
}
