using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    public class BookingsController : Controller
    {
        private readonly IBookingsService _bookingService;
        public BookingsController(IBookingsService bookingService)
        {
            _bookingService = bookingService;
        }

        // GET: api/booking
        [HttpGet]
        public Task<List<Booking>> GetBookings()
        {
            return _bookingService.GetBookings();
        }

        // GET api/booking/5
        [HttpGet("{id}")]
        public string GetBooking(int id)
        {
            return "value";
        }

        // POST api/booking
        [HttpPost]
        public void PostBooking([FromBody]string value) { }

        // PUT api/booking/5
        [HttpPut("{id}")]
        public void PutBooking(int id, [FromBody] string value) { }

        // DELETE api/booking/5
        [HttpDelete("{id}")]
        public void DeleteBooking(int id) { }

        
    }
}
