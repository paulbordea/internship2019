using System.Collections.Generic;

namespace Cinema.Domain.Models
{
    public sealed class User
    {
        public User()
        {
            Booking = new HashSet<Booking>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }

        public ICollection<Booking> Booking { get; set; }
    }
}
