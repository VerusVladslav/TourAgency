using System;
using System.Collections.Generic;
using System.Linq;
using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;

namespace Agency.Service
{
    public class WhereBuyTourService : IService<WhereBuyTour>
    {
        private readonly WhereBuyRepository _wherebuy;

        public WhereBuyTourService(WhereBuyRepository wherebuy)
        {
            _wherebuy = wherebuy;
        }

        public ResultDTO Add(WhereBuyTour element)
        {
            try
            {
                _wherebuy.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "WhereBuyTour added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _wherebuy.Delete(_wherebuy.GetById(Id));
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "WhereBuyTour deleted"
            };
        }

        public IEnumerable<WhereBuyTour> GetAll()
        {
            try
            {
                return _wherebuy.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public WhereBuyTour GetById(string elementId)
        {
            return _wherebuy.GetById(elementId);

        }

        public WhereBuyTour GetByName(string name)
        {
            throw new NotImplementedException();
        }

        public WhereBuyTour Initialize(WhereBuyTour element)
        {
            throw new NotImplementedException();
        }

        public ResultDTO Update(WhereBuyTour element)
        {
            try
            {
                _wherebuy.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "WhereBuyTour updated"
            };
        }
    }
}
