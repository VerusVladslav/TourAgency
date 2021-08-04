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
    public class WhereBuyController : Controller
    {
        private readonly IMapper mapper;
        private readonly WhereBuyTourService _whereBuyTourService;

        public WhereBuyController(WhereBuyRepository whereBuyRepository, IMapper map)
        {
            _whereBuyTourService = new WhereBuyTourService(whereBuyRepository);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Name/{name}")]
        public WhereBuyTourDTO GetFoodByName([FromRoute] string name)
        {
            var whereBuy = mapper.Map<WhereBuyTourDTO>(_whereBuyTourService.GetByName(name));
            return whereBuy;
        }
        [HttpGet("{id}")]
        public WhereBuyTourDTO GetFoodById([FromRoute] string id)
        {
            var whereBuy = mapper.Map<WhereBuyTourDTO>(_whereBuyTourService.GetById(id));
            return whereBuy;
        }

        [HttpGet("AllFood")]
        public List<WhereBuyTourDTO> GetAllFood()
        {
            var whereBuy = mapper.Map<List<WhereBuyTourDTO>>(_whereBuyTourService.GetAll().ToList());
            return whereBuy;
        }
        [HttpPost("AddFood")]
        public ResultDTO AddFood([FromBody] WhereBuyTourDTO newwhereBuy)
        {
            var whereBuy = mapper.Map<WhereBuyTour>(newwhereBuy);
            _whereBuyTourService.Add(whereBuy);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteFoodById([FromRoute] string id)
        {
            _whereBuyTourService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateFood([FromBody] WhereBuyTourDTO whereBuy)
        {
            try
            {
                var newwhereBuy = mapper.Map<WhereBuyTour>(whereBuy);
                _whereBuyTourService.Update(newwhereBuy);
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
