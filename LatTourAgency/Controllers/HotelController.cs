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
    public class HotelController : Controller
    {
        private readonly IMapper mapper;
        private readonly HotelService _hotelService;

        public HotelController(HotelRepository hotelRep,
            TownRepository town,
           
            IMapper map)
        {
            _hotelService = new HotelService(hotelRep,town);
            mapper = map;
        }


        [HttpGet("Hotels")]
        public List<HotelDTO> GetAllHotels()
        {
            var hotel = mapper.Map<List<HotelDTO>>(_hotelService.GetAll().ToList());
            return hotel;
        }

        [HttpGet("{id}")]
        public HotelDTO GetHotelById([FromRoute] string id)
        {
            var hotel = mapper.Map<HotelDTO>(_hotelService.GetById(id));
            return hotel;
        }

        [HttpGet("Name/{hotelname}")]
        public HotelDTO GetFoodByName([FromRoute] string hotelname)
        {
            var hotel = mapper.Map<HotelDTO>(_hotelService.GetByName(hotelname));
            return hotel;
        }


        [HttpPost("Add")]
        public ResultDTO AddHotel([FromBody] HotelDTO newhotel)
        {
            var hotel = mapper.Map<Hotel>(newhotel);

            _hotelService.Add(hotel);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteHotelTourById([FromRoute] string id)
        {
            _hotelService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateHotel([FromBody] HotelDTO hotel)
        {
            try
            {

                var newHotel = mapper.Map<Hotel>(hotel);
                _hotelService.Update(newHotel);
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
