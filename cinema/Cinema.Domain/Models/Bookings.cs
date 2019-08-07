using System;

namespace Cinema.Domain.Models
{
    public class Bookings
    {
        public int BookingId { get; set; }
        public int MovieId { get; set; }
        public int UserId { get; set; }
        public int SeatId { get; set; }
        public DateTime BookingDate { get; set; }
        public TimeSpan BookingTime { get; set; }
        public bool BookingIsAvailable { get; set; }

        public virtual Movies Movie { get; set; }
        public virtual Seats Seat { get; set; }
        public virtual Users User { get; set; }
    }
}
