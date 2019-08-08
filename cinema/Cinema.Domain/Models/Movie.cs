using System;
using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Movie
    {
        public Movie()
        {
            Booking = new HashSet<Booking>();
            Seat = new HashSet<Seat>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }

        public ICollection<Booking> Booking { get; set; }
        public ICollection<Seat> Seat { get; set; }
    }
}
