using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class TourRepository : IRepository<Tour>
    {
        ApplicationDbContext _context;

        public TourRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(Tour _object)
        {
            _context.Tours.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(Tour _object)
        {
            _context.Tours.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<Tour> GetAll()
        {
            return _context.Tours
                .Include(x => x.Images)
                .Include(x => x.PastUsers)
                 .Include(x => x.Users)
                .Include(x => x.Towns)
                .Include(x => x.TourReviews)
                //    .ThenInclude(r => r.User)
                    .ToList();

        }

        public Tour GetById(string Id)
        {
            return _context.Tours
                .Include(x => x.Images)
                .Include(x => x.PastUsers)
                 .Include(x => x.Users)
                .Include(x => x.Towns)
                .Include(x => x.TourReviews)
                  //  .ThenInclude(r => r.User)
                    .FirstOrDefault(x => x.Id == Id);
        }

        public Tour GetByName(string name)
        {
            return _context.Tours
                .Include(x => x.Images)
                .Include(x => x.PastUsers)
                 .Include(x => x.Users)
                .Include(x => x.Towns)
                .Include(x => x.TourReviews)
                  //  .ThenInclude(r => r.User)
                 .FirstOrDefault(x => x.Name == name);

        }

        public void Update(Tour _object)
        {
            _context.Tours.Update(_object);
            _context.SaveChanges();
        }
    }
}
