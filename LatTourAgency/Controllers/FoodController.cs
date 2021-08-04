using AutoMapper;
using Agency.DAL.Repository.Abstraction;
using Agency.DTO;
using Agency.DAL.Models;
using Agency.Results;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Agency.Service;

namespace Agency.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private readonly IMapper mapper;
        private readonly FoodService foodService;

        public FoodController(FoodRepository Food, IMapper map)
        {
            foodService = new FoodService(Food);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Name/{foodname}")]
        public FoodDTO GetFoodByName([FromRoute] string foodname)
        {
            var food = mapper.Map<FoodDTO>(foodService.GetByName(foodname));
            return food;
        }
        [HttpGet("{id}")]
        public FoodDTO GetFoodById([FromRoute] string id)
        {
            var food = mapper.Map<FoodDTO>(foodService.GetById(id));
            return food;
        }

        [HttpGet("AllFood")]
        public List<FoodDTO> GetAllFood()
        {
            var food = mapper.Map<List<FoodDTO>>(foodService.GetAll().ToList());
            return food;
        }
        [HttpPost("AddFood")]
        public  ResultDTO AddFood([FromBody] FoodDTO newfood)
        {
            var food = mapper.Map<Food>(newfood);
            foodService.Add(food);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public  ResultDTO DeleteFoodById([FromRoute] string id)
        {
            foodService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateFood([FromBody]FoodDTO food)
        {
            try
            {
                var newfood = mapper.Map<Food>(food);
                foodService.Update(newfood);
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
