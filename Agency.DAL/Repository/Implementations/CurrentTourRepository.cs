using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class CurrentTourRepository : IRepository<CurrentTour>
    {
        ApplicationDbContext _context;

        public CurrentTourRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(CurrentTour _object)
        {
            _context.CurrentTours.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(CurrentTour _object)
        {
            _context.CurrentTours.Remove(_object);
            _context.SaveChanges();
        }

        public CurrentTour GetByName(string Name)
        {
            return _context.CurrentTours
                 .Include(x => x.BreakFest)
                 .Include(x => x.Lunch)
                 .Include(x => x.Dinner)
                 .Include(x => x.Tour)
                 //      .ThenInclude(t => t.WhereBuyTour)
                .Include(x => x.Users)
                 .FirstOrDefault(c => c.Tour.Name == Name);
        }

        public IEnumerable<CurrentTour> GetAll()
        {
            var list = _context.CurrentTours
                .Include(x => x.BreakFest)
                .Include(x => x.Lunch)
                .Include(x => x.Dinner)
                .Include(x => x.Tour)
                //    .ThenInclude(t => t.WhereBuyTour)
                  .Include(x => x.Users)
              //  .ThenInclude(u => u.CurrentTour)
            .Include(x => x.Users)
              //  .ThenInclude(u => u.UserChild)
            .Include(x => x.Users)
              //  .ThenInclude(u => u.PastTours)
               .Include(x => x.Users)
             //   .ThenInclude(u => u.SelectedTours)
                    
                    .ToList();

            return list;

        }

        public CurrentTour GetById(string Id)
        {
            //  return _context.CurrentTours.FirstOrDefault();
            return _context.CurrentTours
                 .Include(x => x.BreakFest)
                 .Include(x => x.Lunch)
                 .Include(x => x.Dinner)
                 .Include(x => x.Tour)
                 //    .ThenInclude(t => t.WhereBuyTour)
                   .Include(x => x.Users)
             //   .ThenInclude(u => u.CurrentTour)
            .Include(x => x.Users)
            //    .ThenInclude(u => u.UserChild)
            .Include(x => x.Users)
             //   .ThenInclude(u => u.PastTours)
               .Include(x => x.Users)
               // .ThenInclude(u => u.SelectedTours)
                  .FirstOrDefault(c => c.Id == Id);
        }

        public void Update(CurrentTour _object)
        {
            _context.CurrentTours.Update(_object);
            _context.SaveChanges();
        }
    }
}
