using System;

namespace Cinema.Domain.Models
{
    public class MovieSchedule
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Hour { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
