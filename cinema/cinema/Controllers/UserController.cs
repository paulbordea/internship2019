using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserController : Controller
    {
        private readonly CinemaContext _cinemaContext;

        public UserController(CinemaContext cinemaContext)
        {
            _cinemaContext = cinemaContext;
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var listAsync = _cinemaContext.User.ToListAsync();
            return await listAsync;
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            var firstOrDefault = _cinemaContext.User.FirstOrDefault(e => e.Id == id);
            return firstOrDefault;
        }

        // POST api/users
        [HttpPost]
        public void PostUser([FromBody] User user)
        {
            if (user != null)
                _cinemaContext.User.Add(user);
            _cinemaContext.SaveChanges();
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody]User user)
        {
            User entity = _cinemaContext.User.FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                entity.Id = user.Id;
                entity.Name = user.Name;
                entity.Email = user.Email;
                entity.Password = user.Password;
                entity.IsAdmin = user.IsAdmin;
            }

            _cinemaContext.SaveChanges();
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            _cinemaContext.User.Remove(_cinemaContext.User.FirstOrDefault(e => e.Id == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
