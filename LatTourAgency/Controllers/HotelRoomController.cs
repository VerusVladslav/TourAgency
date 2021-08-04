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
    public class HotelRoomController : Controller
    {
        private readonly IMapper mapper;
        private readonly HotelRoomService hotelRoomService;

        public HotelRoomController(HotelRoomRepository hotelRoom,
            HotelRepository hotel,
           
            IMapper map)
        {
            hotelRoomService = new HotelRoomService(hotelRoom, hotel);
            mapper = map;
        }


        [HttpGet("HotelRooms")]
        public List<HotelRoomsDTO> GetAllHotelRooms()
        {
            var hotelRooms = mapper.Map<List<HotelRoomsDTO>>(hotelRoomService.GetAll().ToList());
            return hotelRooms;
        }

        [HttpGet("{id}")]
        public HotelRoomsDTO GetCurrentHotelById([FromRoute] string id)
        {
            var hotels = mapper.Map<HotelRoomsDTO>(hotelRoomService.GetById(id));
            return hotels;
        }



        [HttpPost("Add")]
        public ResultDTO AddHotelRoom([FromBody] HotelRoomsDTO newhotelroom)
        {
            var hotelRoom = mapper.Map<HotelRooms>(newhotelroom);

            hotelRoomService.Add(hotelRoom);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteHotelRoomById([FromRoute] string id)
        {
            hotelRoomService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateHotelRoom([FromBody] HotelRoomsDTO hotelroom)
        {
            try
            {

                var hotelRoom = mapper.Map<HotelRooms>(hotelroom);
                hotelRoomService.Update(hotelRoom);
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
