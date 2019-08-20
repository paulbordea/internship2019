using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatController : Controller
    {
        private readonly ISeatsService _seatService;
        public SeatController(ISeatsService seatService)
        {
            _seatService = seatService;
        }

        // GET: api/seat
        [HttpGet]
        public IEnumerable<bool> GetSeats(MovieSchedule schedule)
        {
            try
            {
                //return _seatService.GetSeats(schedule);
                return null;
            }

            catch (Exception exception)
            {
                throw exception;
            }
        }

        // GET api/seat/5
        [HttpGet("{id}")]
        public string GetSeat(int id)
        {
            return "value";
        }

        // POST api/seat
        [HttpPost]
        public void PostSeat([FromBody]string value) { }

        // PUT api/seat/5
        [HttpPut("{id}")]
        public void PutSeat(int id, [FromBody]string value) { }

        // DELETE api/seat/5
        [HttpDelete("{id}")]
        public void DeleteSeat(int id) { }
    }
}
