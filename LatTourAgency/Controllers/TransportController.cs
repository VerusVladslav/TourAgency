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
    public class TransportController : Controller
    {
        private readonly IMapper mapper;
        private readonly TransportService _transportService;

        public TransportController(TransportRepository transportRepository, IMapper map)
        {
            _transportService = new TransportService(transportRepository);
            mapper = map;
        }

        public IActionResult Index()
        {
            return View();
        }

       
        [HttpGet("{id}")]
        public TransportDTO GetTransportById([FromRoute] string id)
        {
            var food = mapper.Map<TransportDTO>(_transportService.GetById(id));
            return food;
        }

        [HttpGet("AllFood")]
        public List<TransportDTO> GetAllTransport()
        {
            var food = mapper.Map<List<TransportDTO>>(_transportService.GetAll().ToList());
            return food;
        }
        [HttpPost("AddFood")]
        public ResultDTO AddTransport([FromBody] TransportDTO newtransport)
        {
            var transport = mapper.Map<Transport>(newtransport);
            _transportService.Add(transport);

            return new ResultDTO
            {
                Status = 200,
                Message = "Item added"
            };
        }

        [HttpDelete("Delete/{id}")]
        public ResultDTO DeleteTransportById([FromRoute] string id)
        {
            _transportService.Delete(id);
            return new ResultDTO
            {
                Status = 200,
                Message = "Item Deleted"
            };
        }
        [HttpPut("Update")]
        public ResultDTO UpdateTransport([FromBody] TransportDTO transport)
        {
            try
            {
                var newtransport = mapper.Map<Transport>(transport);
                _transportService.Update(newtransport);
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
