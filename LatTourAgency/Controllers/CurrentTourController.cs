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
    public class CurrentTourController : Controller
    {
        private readonly IMapper mapper;
        private readonly CurrentTourService currTourService;

        public CurrentTourController(CurrentTourRepository CurrentTour,
            FoodRepository Food,
            TourRepository tour,
            IMapper map)
        {
            currTourService = new CurrentTourService(CurrentTour, Food,tour);
            mapper = map;
        }

        [HttpGet("Name/{tourname}")]
        public CurrentTourDTO GetFoodByName([FromRoute] string tourname)
        {
            var currentTour = mapper.Map<CurrentTourDTO>(currTourService.GetByName(tourname));
            return currentTour;
        }

        [HttpGet("CurrentTours")]
        public List<CurrentTourDTO> GetAllCurrentTours()
        {
            var currentTours =  mapper.Map<List<CurrentTourDTO>>(currTourService.GetAll().ToList());
            return currentTours;
        }

        [HttpGet("{id}")]
        public CurrentTourDTO GetCurrentTourById([FromRoute] string id)
        {
            var currentTours = mapper.Map<CurrentTourDTO>(currTourService.GetById(id));
            return currentTours;
        }

        [HttpPost("Add")]
        public ResultDTO AddCurrentTour([FromBody] CurrentTourDTO newcurrTour)
        {
            var cueTour = mapper.Map<CurrentTour>(newcurrTour);

            currTourService.Add(cueTour);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteCurrentTourById([FromRoute] string id)
        {
            currTourService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateCurrentTour([FromBody] CurrentTourDTO currentTour)
        {
            try
            {

                var cueTour = mapper.Map<CurrentTour>(currentTour);
                currTourService.Update(cueTour);
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
                    Status = 500,
                    Message = "Error"
                };
            }
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
