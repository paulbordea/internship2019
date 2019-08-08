using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    public class BookingController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public BookingController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        // GET: api/bookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
            var listAsync = _cinemaContext.Booking.ToListAsync();
            return await listAsync;
        }

        // GET api/bookings/5
        [HttpGet("{id}")]
        public string GetBooking(int id)
        {
            return "value";
        }

        // POST api/bookings
        [HttpPost]
        public void PostBooking([FromBody]string value) { }

        // PUT api/bookings/5
        [HttpPut("{id}")]
        public void PutBooking(int id, [FromBody] string value) { }

        // DELETE api/bookings/5
        [HttpDelete("{id}")]
        public void DeleteBooking(int id) { }

    }
}
