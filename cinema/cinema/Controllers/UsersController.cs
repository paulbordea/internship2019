using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cinema.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UsersController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public UsersController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }
        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _cinemaContext.Users.ToListAsync();
        }

        // GET api/Users/5
        [HttpGet("{id}")]
        public ActionResult<Users> GetUser(int id)
        {
            return _cinemaContext.Users.FirstOrDefault(e => e.UserId == id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Users user)
        {
            _cinemaContext.Users.Add(user);
            _cinemaContext.SaveChanges();
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Users user)
        {
            Users entity = _cinemaContext.Users.FirstOrDefault(e => e.UserId == id);
            entity.UserId = user.UserId;
            entity.UserName = user.UserName;
            entity.UserEmail = user.UserEmail;
            entity.UserPassword = user.UserPassword;
            entity.UserIsAdmin = user.UserIsAdmin;
            _cinemaContext.SaveChanges();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _cinemaContext.Users.Remove(_cinemaContext.Users.FirstOrDefault(e => e.UserId == id));
            _cinemaContext.SaveChanges();
        }
    }
}
