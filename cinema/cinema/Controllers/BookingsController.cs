using System;
using System.Collections.Generic;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : Controller
    {
        private readonly IBookingsService _bookingService;
        private readonly ISeatsService _seatsService;
        public BookingController(IBookingsService bookingService, ISeatsService seatsService)
        {
            _bookingService = bookingService;
            _seatsService = seatsService;
        }

        // GET: api/booking
        [HttpGet]
        public List<Booking> GetBookings()
        {
            try
            {
                return _bookingService.GetBookings();

            }

            catch (Exception exception)
            {
                throw exception;
            }
        }

        // GET api/booking/5
        [HttpGet("{id}")]
        public string GetBooking(int id)
        {
            return "value";
        }

        // POST api/booking
        [HttpPost]
        public void PostBooking(BookingInfo info)
        {
            try
            {
                _bookingService.InsertBooking(info);
                _seatsService.InsertSeats(info);
            }

            catch (Exception exception)
            {
                throw exception;
            }
        }

        // PUT api/booking/5
        [HttpPut("{id}")]
        public void PutBooking(int id, [FromBody] string value) { }

        // DELETE api/booking/5
        [HttpDelete("{id}")]
        public void DeleteBooking(int id)
        {
            _bookingService.DeleteBooking(id);
        }
    }
}
