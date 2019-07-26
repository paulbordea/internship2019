using System;
using System.Collections.Generic;

namespace cinema.Models
{
    public partial class Users
    {
        public Users()
        {
            Bookings = new HashSet<Bookings>();
            Seats = new HashSet<Seats>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public bool UserIsAdmin { get; set; }

        public virtual ICollection<Bookings> Bookings { get; set; }
        public virtual ICollection<Seats> Seats { get; set; }
    }
}
