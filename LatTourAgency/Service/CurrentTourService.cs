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
    public class CurrentTourService : IService<CurrentTour>
    {
        private CurrentTourRepository _cerrtourrepository;

        private FoodRepository _foodrepository;
        private TourRepository _tourrepository;


        public CurrentTourService(CurrentTourRepository current,
            FoodRepository foodrepository,
            TourRepository tourrepository)
        {
            _cerrtourrepository = current;
            _foodrepository = foodrepository;
            _tourrepository = tourrepository;
        }

        public IEnumerable<CurrentTour> GetAll()
        {
            try
            {

                return _cerrtourrepository.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResultDTO Add(CurrentTour element)
        {
            try
            {
                element = Initialize(element);

                _cerrtourrepository.Create(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "CurrentTour added"
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
                _cerrtourrepository.Delete(_cerrtourrepository.GetById(Id));
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Current Tour deleted"
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
        public ResultDTO Update(CurrentTour element)
        {
            try
            {
                element = Initialize(element);
                _cerrtourrepository.Update(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Current Tour Updated !"
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

        public CurrentTour GetById(string elementId)
        {
            try
            {

                return _cerrtourrepository.GetById(elementId);
            }
            catch { throw; }
        }

        public CurrentTour GetByName(string name)
        {
            try
            {

                return _cerrtourrepository.GetByName(name);
            }
            catch { throw; }

        }

        public CurrentTour Initialize(CurrentTour element)
        {
            try
            {

                element.Tour = _tourrepository.GetByName(element.Tour.Name);
                element.BreakFest = _foodrepository.GetByName(element.BreakFest.Foods);
                element.Dinner = _foodrepository.GetByName(element.Dinner.Foods);
                element.Lunch = _foodrepository.GetByName(element.Lunch.Foods);

                return element;
            }
            catch { throw; }
        }
    }
}
