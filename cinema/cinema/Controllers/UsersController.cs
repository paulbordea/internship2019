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
    
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;
        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        // GET: api/user
        [HttpGet]
        public List<User> GetUsers()
        {
            try
            {
                return _usersService.GetUsers();

            }
            catch (Exception exception)
            {
                throw exception;
            }
        }


        // GET api/user/username/password
        [HttpGet("{username}/{password}")]
        public ActionResult<User> GetUserByCredentials(string username, string password)
        {
            return _usersService.GetUserByCredentials(username, password);
        }

        // POST api/user
        [HttpPost]
        public void PostUser([FromBody] User user)
        {
            try
            {
                _usersService.PostUser(user);
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
                _usersService.PutUser(id, user);
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
                _usersService.DeleteUser(id);
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}
