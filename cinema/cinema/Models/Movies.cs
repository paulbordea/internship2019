using System;
using System.Collections.Generic;

namespace cinema.Models
{
    public partial class Movies
    {
        public Movies()
        {
            Bookings = new HashSet<Bookings>();
            Seats = new HashSet<Seats>();
        }

        public int MovieId { get; set; }
        public string MovieName { get; set; }
        public DateTime? MovieDate { get; set; }

        public virtual ICollection<Bookings> Bookings { get; set; }
        public virtual ICollection<Seats> Seats { get; set; }
    }
}
