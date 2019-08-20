using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Movie
    {
        public Movie()
        {
            Booking = new HashSet<Booking>();
            MovieSchedule = new HashSet<MovieSchedule>();
            Seat = new HashSet<Seat>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Actors { get; set; }

        public ICollection<Booking> Booking { get; set; }
        public ICollection<MovieSchedule> MovieSchedule { get; set; }
        public ICollection<Seat> Seat { get; set; }
    }
}
