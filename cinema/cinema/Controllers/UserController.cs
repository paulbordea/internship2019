using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Interfaces;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserController : Controller
    {
        private readonly IUsersService _userService;
        public UserController(IUsersService userService)
        {
            _userService = userService;
        }

        // GET: api/user
        [HttpGet]
        public Task<List<User>> GetUsers()
        {
            return _userService.GetUsers();
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            return _userService.GetUser(id);
        }

        // GET api/user/username/password
        [HttpGet("{username}/{password}")]
        public ActionResult<User> GetUserByCredentials(string username, string password)
        {
            return _userService.GetUserByCredentials(username, password);
        }

        // POST api/user
        [HttpPost]
        public void PostUser([FromBody] User user)
        {
            _userService.PostUser(user);
        }

        // PUT api/user/5
        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody] User user)
        {
            _userService.PutUser(id, user);
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            _userService.DeleteUser(id);
        }
    }
}
