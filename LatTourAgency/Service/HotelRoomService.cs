using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;

namespace Agency.Service
{
    public class HotelRoomService : IService<HotelRooms>
    {
        private readonly HotelRoomRepository _hotelRoom;
        private readonly HotelRepository _hotel;


        public HotelRoomService(HotelRoomRepository hotelRoom,
            HotelRepository hotel)
        {
            _hotelRoom = hotelRoom;
            _hotel = hotel;
        }

        public ResultDTO Add(HotelRooms element)
        {
            try
            {
                element = Initialize(element);
                _hotelRoom.Create(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel Rooms added"
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
                _hotelRoom.Delete(_hotelRoom.GetById(Id));
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel Rooms deleted"
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

        public IEnumerable<HotelRooms> GetAll()
        {
            try
            {
                return _hotelRoom.GetAll().ToList();
            }
            catch
            {
                throw;
            }
        }

        public HotelRooms GetById(string elementId)
        {
            try
            {
                return _hotelRoom.GetById(elementId);
            }
            catch { throw; }

        }

        public HotelRooms GetByName(string name)
        {
            try
            {
                return _hotelRoom.GetByName(name);
            }
            catch { throw; }

        }

        public HotelRooms Initialize(HotelRooms element)
        {
            try
            {


                element.Hotel = _hotel.GetByName(element.Hotel.Name);
                return element;
            }
            catch
            {

                throw;
            }
        }

        public ResultDTO Update(HotelRooms element)
        {
            try
            {
                element = Initialize(element);
                _hotelRoom.Update(element);

                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Hotel Rooms updated"
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
