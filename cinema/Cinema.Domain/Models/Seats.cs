using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Seats
    {
        public Seats()
        {
            Bookings = new HashSet<Bookings>();
        }

        public int MovieId { get; set; }
        public int SeatId { get; set; }
        public int UserId { get; set; }

        public Movies Movie { get; set; }
        public Users User { get; set; }
        public ICollection<Bookings> Bookings { get; set; }
    }
}
