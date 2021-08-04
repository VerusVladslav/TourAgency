using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Agency.BLL.Service.Abstraction;
using Agency.DAL.Models;
using Agency.DAL.Repository.Abstraction;
using Agency.Results;

namespace Agency.Service
{
    public class TownService : IService<Town>
    {
        private readonly TownRepository _Town;

        public TownService(TownRepository Town)
        {
            _Town = Town;
        }

        public ResultDTO Add(Town element)
        {
            try
            {
                _Town.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Town added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _Town.Delete(_Town.GetById(Id));
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Town deleted"
            };
        }

        public IEnumerable<Town> GetAll()
        {
            try
            {
                return _Town.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Town GetById(string elementId)
        {
            return _Town.GetById(elementId);
        }

        public Town GetByName(string name)
        {
            return _Town.GetByName(name);
        }

        public Town Initialize(Town element)
        {
            throw new NotImplementedException();
        }

        public ResultDTO Update(Town element)
        {
            try
            {
                _Town.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Hotel updated"
            };
        }
    }
}
