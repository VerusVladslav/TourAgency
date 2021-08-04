using Agency.Results;
using System.Collections.Generic;

namespace Agency.BLL.Service.Abstraction
{
    public interface IService<T>
    {
        public T GetById(string elementId);
        public T GetByName(string name);
        public IEnumerable<T> GetAll();
        public ResultDTO Add(T element);
        public ResultDTO Delete(string Id);
        public ResultDTO Update(T element);
        public T Initialize(T element);

    }
}
