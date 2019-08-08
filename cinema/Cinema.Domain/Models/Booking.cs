using System;

namespace Cinema.Domain.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int UserId { get; set; }
        public int SeatId { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public bool IsAvailable { get; set; }

        public virtual Movie Movie { get; set; }
        public virtual Seat Seat { get; set; }
        public virtual User User { get; set; }
    }
}
