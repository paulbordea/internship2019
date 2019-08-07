using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cinema.DataAccess;
using Cinema.Domain.Models;
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

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            var listAsync = _cinemaContext.Users.ToListAsync();
            return await listAsync;
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public ActionResult<Users> GetUser(int id)
        {
            var firstOrDefault = _cinemaContext.Users.FirstOrDefault(e => e.UserId == id);
            return firstOrDefault;
        }

        // POST api/users
        [HttpPost]
        public void PostUser([FromBody] Users user)
        {
            if (user != null)
                _cinemaContext.Users.Add(user);
            _cinemaContext.SaveChanges();
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody]Users user)
        {
            Users entity = _cinemaContext.Users.FirstOrDefault(e => e.UserId == id);
            if (entity != null)
            {
                entity.UserId = user.UserId;
                entity.UserName = user.UserName;
                entity.UserEmail = user.UserEmail;
                entity.UserPassword = user.UserPassword;
                entity.UserIsAdmin = user.UserIsAdmin;
            }

            _cinemaContext.SaveChanges();
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            _cinemaContext.Users.Remove(_cinemaContext.Users.FirstOrDefault(e => e.UserId == id) ?? throw new InvalidOperationException());
            _cinemaContext.SaveChanges();
        }
    }
}
