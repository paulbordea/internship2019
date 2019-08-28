using System;
using Cinema.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatsController : Controller
    {
        private readonly ISeatsService _seatsService;
        public SeatsController(ISeatsService seatsService)
        {
            _seatsService = seatsService;
        }

        // GET: api/seat
        [HttpGet("{movieId}/{*date}")]
        public JsonResult GetSeats(int movieId, DateTime date)
        {
            try
            {
                var seats = _seatsService.GetSeats(movieId, date);
                var result = Json(seats);
                return result;
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
