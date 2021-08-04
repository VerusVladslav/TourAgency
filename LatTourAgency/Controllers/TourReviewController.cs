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
    public class TourReviewController : Controller
    {
        private readonly IMapper mapper;
        private readonly TourReviewService _tourReviewService;

        public TourReviewController(TourReviewRepository tourReviewRepository,
            TourRepository tourRepository,
            
            IMapper map)
        {
            _tourReviewService = new TourReviewService(tourReviewRepository,tourRepository);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

        
        [HttpGet("{id}")]
        public TourReviewDTO GetReviewById([FromRoute] string id)
        {
            var food = mapper.Map<TourReviewDTO>(_tourReviewService.GetById(id));
            return food;
        }

        [HttpGet("AllFood")]
        public List<TourReviewDTO> GetAllReviews()
        {
            var food = mapper.Map<List<TourReviewDTO>>(_tourReviewService.GetAll().ToList());
            return food;
        }
        [HttpPost("AddFood")]
        public ResultDTO AddReview([FromBody] TourReviewDTO newreview)
        {
            var review = mapper.Map<TourReview>(newreview);
            _tourReviewService.Add(review);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteReviewById([FromRoute] string id)
        {
            _tourReviewService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateReview([FromBody] TourReviewDTO tourReview)
        {
            try
            {
                var newtourReview = mapper.Map<TourReview>(tourReview);
                _tourReviewService.Update(newtourReview);
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
