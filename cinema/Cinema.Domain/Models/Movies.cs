using System;
using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Movies
    {
        public Movies()
        {
            Bookings = new HashSet<Bookings>();
            Seats = new HashSet<Seats>();
        }

        public int MovieId { get; set; }
        public string MovieName { get; set; }
        public DateTime? MovieDate { get; set; }

        public ICollection<Bookings> Bookings { get; set; }
        public ICollection<Seats> Seats { get; set; }
    }
}
