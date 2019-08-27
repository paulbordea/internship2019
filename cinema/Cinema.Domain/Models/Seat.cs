using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cinema.Domain.Models
{
    public class Seat
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int MovieId { get; set; }

        public int SeatNumber { get; set; }
        public DateTime Date { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
