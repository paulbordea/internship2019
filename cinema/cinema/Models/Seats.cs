using System;
using System.Collections.Generic;

namespace cinema.Models
{
    public partial class Seats
    {
        public Seats()
        {
            Bookings = new HashSet<Bookings>();
        }

        public int MovieId { get; set; }
        public int SeatId { get; set; }
        public int UserId { get; set; }

        public virtual Movies Movie { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<Bookings> Bookings { get; set; }
    }
}
