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
            try
            {
                return _userService.GetUsers();

            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            try
            {
                return _userService.GetUser(id);
            }
            catch (NullReferenceException exception)
            {
                throw exception;
            }
        }

        // POST api/user
        [HttpPost]
        public void PostUser([FromBody] User user)
        {
            try
            {
                _userService.PostUser(user);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // PUT api/user/5
        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody] User user)
        {
            try
            {
                _userService.PutUser(id, user);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            try
            {
                _userService.DeleteUser(id);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}
