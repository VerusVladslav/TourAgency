using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class WhereBuyRepository : IRepository<WhereBuyTour>
    {
        ApplicationDbContext _context;

        public WhereBuyRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(WhereBuyTour _object)
        {
            _context.WhereBuyTours.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(WhereBuyTour _object)
        {
            _context.WhereBuyTours.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<WhereBuyTour> GetAll()
        {
            return _context.WhereBuyTours
                .Include(x => x.Tours)
                    .ToList();
        }

        public WhereBuyTour GetById(string Id)
        {
            return  _context.WhereBuyTours
                 .Include(x => x.Tours)
                     .FirstOrDefault(x => x.Id == Id);
        }

        public WhereBuyTour GetByName(string name)
        {
            return _context.WhereBuyTours
               .Include(x => x.Tours)
                   .FirstOrDefault(x => x.FirmTitle == name);
        }

        public void Update(WhereBuyTour _object)
        {
            _context.WhereBuyTours.Update(_object);
            _context.SaveChanges();
        }
    }
}
