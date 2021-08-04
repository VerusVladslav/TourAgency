using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class UserChildRepository : IRepository<UserChild>
    {
        ApplicationDbContext _context;

        public UserChildRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(UserChild _object)
        {
            _context.UserChild.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(UserChild _object)
        {
            _context.UserChild.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<UserChild> GetAll()
        {
            return _context.UserChild
                 .Include(x => x.Parent)
                  //   .ThenInclude(p => p.CurrentTour)
                    .Include(x => x.Parent)
                 //    .ThenInclude(p => p.PastTours)
                   .Include(x => x.Parent)
                  //   .ThenInclude(p => p.SelectedTours)
                    .Include(x => x.Parent)
                 //    .ThenInclude(p => p.ReviewTour)
                 .ToList();
        }

        public UserChild GetById(string Id)
        {
            return _context.UserChild
                 .Include(x => x.Parent)
                  //   .ThenInclude(p => p.CurrentTour)
                    .Include(x => x.Parent)
                  //   .ThenInclude(p => p.PastTours)
                   .Include(x => x.Parent)
                  //   .ThenInclude(p => p.SelectedTours)
                    .Include(x => x.Parent)
                    // .ThenInclude(p => p.ReviewTour)
                 .FirstOrDefault(x => x.Id == Id);
        }

        public UserChild GetByName(string name)
        {
            return _context.UserChild
                 .Include(x => x.Parent)
                  //   .ThenInclude(p => p.CurrentTour)
                    .Include(x => x.Parent)
                  //   .ThenInclude(p => p.PastTours)
                   .Include(x => x.Parent)
                  //   .ThenInclude(p => p.SelectedTours)
                    .Include(x => x.Parent)
                   //  .ThenInclude(p => p.ReviewTour)
                 .FirstOrDefault(x => x.Name == name);
        }

        public void Update(UserChild _object)
        {
            _context.UserChild.Update(_object);
            _context.SaveChanges();
        }
    }
}
