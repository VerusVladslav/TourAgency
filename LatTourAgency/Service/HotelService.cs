using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace Agency.Service
{
    public class HotelService : IService<Hotel>
    {
        private readonly HotelRepository _hotel;
        private readonly TownRepository _town;

        public HotelService(HotelRepository hotel,
            TownRepository town)
        {
            _hotel = hotel;
            _town = town;
        }

        public ResultDTO Add(Hotel element)
        {
            try
            {
                element = Initialize(element);
                _hotel.Create(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel added"
                };
            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }

        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _hotel.Delete(_hotel.GetById(Id));
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel deleted"
                };
            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }

        }

        public IEnumerable<Hotel> GetAll()
        {
            try
            {
                return _hotel.GetAll().ToList();
            }
            catch
            {
                throw;
            }
        }

        public Hotel GetById(string elementId)
        {
            try
            {
                return _hotel.GetById(elementId);
            }
            catch
            {

                throw;
            }

        }

        public Hotel GetByName(string name)
        {
            try
            {

                return _hotel.GetByName(name);
            }
            catch { throw; }
        }

        public Hotel Initialize(Hotel element)
        {
            try
            {

                element.Town = _town.GetByName(element.Town.Name);
                return element;
            }
            catch { throw; }
        }

        public ResultDTO Update(Hotel element)
        {
            try
            {
                element = Initialize(element);

                _hotel.Update(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel updated"
                };
            }
            catch (Exception ex)
            {
                var win32ex = (Win32Exception)ex.InnerException;
                return new ResultDTO
                {
                    Status = win32ex.ErrorCode,
                    Message = ex.Message
                };
            }

        }
    }
}
