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
using Microsoft.AspNetCore.Authorization;
using Agency.Service;
using Microsoft.AspNetCore.Hosting;

namespace Agency.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class TourController : Controller
    {
        private readonly IMapper mapper;
     
        private readonly TourService _tourService;

        
        public IWebHostEnvironment Env;

        public TourController(TourRepository tourRepository,
            IMapper map,
              IWebHostEnvironment env)
        {
            mapper = map;
            Env = env;
            _tourService = new TourService(tourRepository,env);
        }

      

        [HttpGet("tour/{tourname}")]
        public TourDTO GetTourByName([FromRoute] string tourname)
        {
            var tour = mapper.Map<TourDTO>(_tourService.GetByName(tourname));
            var domain = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            tour.MainImage = $"{domain}/Files/{tour.MainImage}";

            return tour;
        }
        [HttpGet("{id}")]
        public TourDTO GetTourById([FromRoute] string id)
        {
            var tour = mapper.Map<TourDTO>(_tourService.GetById(id));
            var domain = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            tour.MainImage = $"{domain}/Files/{tour.MainImage}";

            return tour;
        }

        [HttpGet("AllTours")]
        public List<TourDTO> GetAllTour()
        {
            var tourList = _tourService.GetAll().ToList();
            var tour = mapper.Map<List<TourDTO>>(tourList);
            var domain = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";
            foreach (var item in tour)
            {
                item.MainImage = $"{domain}/Files/{item.MainImage}";
            }
            return tour;
        }
        [HttpPost("AddTour")]
        public ResultDTO AddTour([FromBody] TourDTO newtour)
        {
            var tour = mapper.Map<Tour>(newtour);
            _tourService.Add(tour);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteTourById([FromRoute] string id)
        {
            _tourService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateTour([FromBody] TourDTO tour)
        {
            try
            {
                var newtour = mapper.Map<Tour>(tour);
                _tourService.Update(newtour);
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

        public IActionResult Index()
        {
            return View();
        }
    }
}
