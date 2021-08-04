using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class TransportRepository : IRepository<Transport>
    {
        ApplicationDbContext _context;

        public TransportRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(Transport _object)
        {
            _context.Transports.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(Transport _object)
        {
            _context.Transports.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<Transport> GetAll()
        {
            return _context.Transports
                  .Include(x => x.From)
                    //  .ThenInclude(f => f.Town)
                  .Include(x => x.To)
                     // .ThenInclude(f => f.Town)
                  .ToList();
        }

        public Transport GetById(string Id)
        {
            return _context.Transports
                 .Include(x => x.From)
                  //   .ThenInclude(f => f.Town)
                 .Include(x => x.To)
                  //   .ThenInclude(f => f.Town)
                 .FirstOrDefault(x => x.Id == Id);
        }

        public Transport GetByName(string name)
        {
            return _context.Transports
                 .Include(x => x.From)
                  //   .ThenInclude(f => f.Town)
                 .Include(x => x.To)
                  //   .ThenInclude(f => f.Town)
                 .FirstOrDefault(x => x.Name == name);
        }

        public void Update(Transport _object)
        {
            _context.Transports.Update(_object);
            _context.SaveChanges();
        }
    }
}
