using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatController : Controller, ISeatsService
    {
        private readonly ISeatsService _seatService;
        public SeatController(ISeatsService seatService)
        {
            _seatService = seatService;
        }

        // GET: api/seat
        [HttpGet]

        //public async Task<ActionResult<IEnumerable<Seat>>> GetSeats()
        //{
        //    var listAsync = _cinemaContext.Seat.ToListAsync();
        //    return await listAsync;
        //}
        public Task<List<Seat>> GetSeats()
        {
            return _seatService.GetSeats();
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
