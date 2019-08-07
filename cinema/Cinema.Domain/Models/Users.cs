using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class Users
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

        public ICollection<Bookings> Bookings { get; set; }
        public ICollection<Seats> Seats { get; set; }
    }
}
