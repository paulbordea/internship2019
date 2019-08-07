using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatsController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public SeatsController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        // GET: api/seats
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<Seats>>> GetSeats()
        {
            var listAsync = _cinemaContext.Seats.ToListAsync();
            return await listAsync;
        }

        // GET api/seats/5
        [HttpGet("{id}")]
        public string GetSeat(int id)
        {
            return "value";
        }

        // POST api/seats
        [HttpPost]
        public void PostSeat([FromBody]string value) { }

        // PUT api/seats/5
        [HttpPut("{id}")]
        public void PutSeat(int id, [FromBody]string value) { }

        // DELETE api/seats/5
        [HttpDelete("{id}")]
        public void DeleteSeat(int id) { }
    }
}
