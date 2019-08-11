using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Seat
    {
        public Seat()
        {
            Booking = new HashSet<Booking>();
        }

        public int MovieId { get; set; }
        public int Id { get; set; }
        public int UserId { get; set; }

        public Movie Movie { get; set; }
        public User User { get; set; }
        public ICollection<Booking> Booking { get; set; }
    }
}
