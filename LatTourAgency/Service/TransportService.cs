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
    public class TransportService : IService<Transport>
    {
        private readonly TransportRepository _Transport;



        public TransportService(TransportRepository Transport)
        {
            _Transport = Transport;
        }

        public ResultDTO Add(Transport element)
        {
            try
            {
                _Transport.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Transport added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _Transport.Delete(_Transport.GetById(Id));
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Transport deleted"
            };
        }

        public IEnumerable<Transport> GetAll()
        {
            try
            {
                return _Transport.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Transport GetById(string elementId)
        {
            return _Transport.GetById(elementId);
        }

        public Transport GetByName(string name)
        {
            return _Transport.GetByName(name);
        }

        public Transport Initialize(Transport element)
        {
            throw new NotImplementedException();
        }

        public ResultDTO Update(Transport element)
        {
            try
            {
                _Transport.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Transport updated"
            };
        }
    }
}
