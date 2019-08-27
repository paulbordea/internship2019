using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cinema.Domain.Models
{
    public class MovieSchedule
    {
        public int Id { get; set; }

        [ForeignKey("Movie")]
        public int MovieId { get; set; }
        public DateTime Date { get; set; }
     //   public TimeSpan Time { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
