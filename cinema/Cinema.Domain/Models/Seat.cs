using System;

namespace Cinema.Domain.Models
{
    public class Seat
    {
        public int MovieId { get; set; }
        public int Id { get; set; }
        public int SeatNumber { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Hour { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
