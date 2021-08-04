using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class TownRepository : IRepository<Town>
    {
        ApplicationDbContext _context;

        public TownRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(Town _object)
        {
            _context.Towns.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(Town _object)
        {
            _context.Towns.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<Town> GetAll()
        {
            return _context.Towns
                .Include(x => x.ToTown)
                  //  .ThenInclude(x => x.Transport)
                 .Include(x => x.FromTown)
                //    .ThenInclude(x => x.Transport)
                  .Include(x => x.Hotels)
                  .Include(x => x.Tours)
                  .ToList();


        }

        public Town GetById(string Id)
        {
            return _context.Towns
               .Include(x => x.ToTown)
                //   .ThenInclude(x => x.Transport)
                .Include(x => x.FromTown)
                //   .ThenInclude(x => x.Transport)
                 .Include(x => x.Hotels)
                 .Include(x => x.Tours)
                 .FirstOrDefault(x => x.Id == Id);
        }

        public Town GetByName(string name)
        {
            return _context.Towns
             .Include(x => x.ToTown)
              //   .ThenInclude(x => x.Transport)
              .Include(x => x.FromTown)
              //   .ThenInclude(x => x.Transport)
               .Include(x => x.Hotels)
               .Include(x => x.Tours)
               .FirstOrDefault(x => x.Name == name);
        }

        public void Update(Town _object)
        {
            _context.Towns.Update(_object);
            _context.SaveChanges();
        }
    }
}
