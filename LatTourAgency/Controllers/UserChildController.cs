using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Agency.DAL.Repository.Abstraction;
using Agency.DTO;
using Agency.DAL.Models;
using Agency.Results;
using Agency.Service;

namespace Agency.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserChildController : Controller
    {
        private readonly IMapper mapper;
        private readonly UserChildsService _userChildsService;

        public UserChildController(UserChildRepository userChildRepository,
         
            IMapper map)
        {
            _userChildsService = new UserChildsService(userChildRepository);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

      
        [HttpGet("{id}")]
        public UserChildDTO GetChildById([FromRoute] string id)
        {
            var food = mapper.Map<UserChildDTO>(_userChildsService.GetById(id));
            return food;
        }

        [HttpGet("AllFood")]
        public List<UserChildDTO> GetAllChilds()
        {
            var food = mapper.Map<List<UserChildDTO>>(_userChildsService.GetAll().ToList());
            return food;
        }
        [HttpPost("AddFood")]
        public ResultDTO AddChild([FromBody] UserChildDTO newchild)
        {
            var child = mapper.Map<UserChild>(newchild);
            _userChildsService.Add(child);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteChildById([FromRoute] string id)
        {
            _userChildsService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateChild([FromBody] UserChildDTO child)
        {
            try
            {
                var newchild = mapper.Map<UserChild>(child);
                _userChildsService.Update(newchild);
                return new ResultDTO
                {
                    Status = 200,
                    Message = "Item Updated"
                };
            }
            catch (Exception)
            {
                return new ResultDTO
                {
                    Status = 200,
                    Message = "Item Deleted"
                };
            }
        }
    }
}
