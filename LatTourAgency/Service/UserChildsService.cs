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
    public class UserChildsService : IService<UserChild>
    {
        private readonly UserChildRepository _UserChild;
      


        public UserChildsService(UserChildRepository UserChild
           )
        {
            _UserChild = UserChild;
          
        }

        public ResultDTO Add(UserChild element)
        {
            try
            {
                Initialize(element);
                _UserChild.Create(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Child added"
            };
        }

        public ResultDTO Delete(string Id)
        {
            try
            {
                _UserChild.Delete(_UserChild.GetById(Id));
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Child deleted"
            };
        }

        public IEnumerable<UserChild> GetAll()
        {
            try
            {
                return _UserChild.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public UserChild GetById(string elementId)
        {
            return _UserChild.GetById(elementId);
        }

        public UserChild GetByName(string name)
        {
            return _UserChild.GetByName(name);
        }

        public UserChild Initialize(UserChild element)
        {
           
            return element;
        }

        public ResultDTO Update(UserChild element)
        {
            try
            {
                Initialize(element);

                _UserChild.Update(element);
            }
            catch { }
            return new ResultDTO()
            {
                Status = 200,
                Message = "Child updated"
            };
        }
    }
}
