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
    public class FoodService : IService<Food>
    {
        private readonly FoodRepository _food;

        public FoodService(FoodRepository food)
        {
            _food = food;
        }


        public IEnumerable<Food> GetAll()
        {
            try
            {
                return _food.GetAll().ToList();
            }
            catch
            {
                throw;
            }
        }

        public ResultDTO Add(Food element)
        {
            try
            {
                _food.Create(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Food added"
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
                _food.Delete(_food.GetById(Id));

                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Food deleted"
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

        public ResultDTO Update(Food element)
        {
            try
            {
                _food.Update(element);
                return new ResultDTO()
                {
                    Status = 200,
                    Message = "Food updated"
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

        public Food GetById(string elementId)
        {
            try
            {

                return _food.GetAll().Where(x => x.Id == elementId).FirstOrDefault();
            }
            catch { throw; }
        }

        public Food GetByName(string name)
        {
            try
            {

                return _food.GetAll().Where(x => x.Foods == name).FirstOrDefault();
            }
            catch
            {

                throw;
            }
        }

        public Food Initialize(Food element)
        {
            throw new NotImplementedException();
        }
    }
}
