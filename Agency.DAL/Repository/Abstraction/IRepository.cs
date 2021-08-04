using System.Collections.Generic;

namespace Agency.DAL.Repository.Abstraction
{
    public interface IRepository<T> where T : class
    {
        public void Create(T _object);

        public void Update(T _object);

        public IEnumerable<T> GetAll();

        public T GetById(string Id);

        public T GetByName(string name);



        public void Delete(T _object);
    }
}
