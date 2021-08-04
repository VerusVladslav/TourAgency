using System.Collections.Generic;
using System.Linq;
using Agency.DAL.Data;
using Agency.DAL.Models;
namespace Agency.DAL.Repository.Abstraction

{
    public class FoodRepository : IRepository<Food>
    {
        ApplicationDbContext _context;

        public FoodRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(Food _object)
        {
            _context.Foods.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(Food _object)
        {
            _context.Foods.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<Food> GetAll()
        {
            return _context.Foods.ToList();
        }

        public Food GetById(string Id)
        {
            return _context.Foods.FirstOrDefault(x => x.Id == Id);
        }

        public Food GetByName(string name)
        {
            return _context.Foods.FirstOrDefault(x => x.Foods == name);

        }

        public void Update(Food _object)
        {
            _context.Foods.Update(_object);
            _context.SaveChanges();

        }
    }
}
