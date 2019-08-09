using System.Collections.Generic;
using System.Threading.Tasks;
using Cinema.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cinema.Domain.Interfaces
{
    public interface IUsersService
    {
        Task<List<User>> GetUsers();
        ActionResult<User> GetUser(int id);
        void PostUser([FromBody] User user);
        void PutUser(int id, [FromBody] User user);
        void DeleteUser(int id);
    }
}
