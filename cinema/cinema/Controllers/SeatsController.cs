using System.Collections.Generic;
using System.Threading.Tasks;
using cinema.Models;
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
        // GET: api/<controller>
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<Seats>>> GetSeats()
        {
           
            return await _cinemaContext.Seats.ToListAsync();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
