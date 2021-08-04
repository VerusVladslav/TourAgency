using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Agency.BLL.Service;
using Agency.DAL.Repository.Abstraction;
using Agency.DTO;
using Agency.DAL.Models;
using Agency.Results;
using Agency.Service;

namespace Agency.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TownController : Controller
    {
        private readonly IMapper mapper;
        private readonly TownService _townService;

        public TownController(TownRepository townRepository,
            IMapper map)
        {
            _townService = new TownService(townRepository);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Name/{townname}")]
        public TownDTO GetTownByName([FromRoute] string townname)
        {
            var town = mapper.Map<TownDTO>(_townService.GetByName(townname));
            return town;
        }
        [HttpGet("{id}")]
        public TownDTO GetTownById([FromRoute] string id)
        {
            var town = mapper.Map<TownDTO>(_townService.GetById(id));
            return town;
        }

        [HttpGet("AllTown")]
        public List<TownDTO> GetAllTowns()
        {
            var town = mapper.Map<List<TownDTO>>(_townService.GetAll().ToList());
            return town;
        }
        [HttpPost("AddTown")]
        public ResultDTO AddTown([FromBody] TownDTO newtown)
        {
            var town = mapper.Map<Town>(newtown);
            _townService.Add(town);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteTownById([FromRoute] string id)
        {
            _townService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateTown([FromBody] TownDTO town)
        {
            try
            {
                var newtown = mapper.Map<Town>(town);
                _townService.Update(newtown);
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
