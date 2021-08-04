using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class TourReviewRepository : IRepository<TourReview>
    {

        ApplicationDbContext _context;

        public TourReviewRepository(ApplicationDbContext context)
        {
            _context = context;

        }
        public void Create(TourReview _object)
        {
            _context.TourReviews.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(TourReview _object)
        {
            _context.TourReviews.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<TourReview> GetAll()
        {
            return _context.TourReviews
                 .Include(x => x.Tour)
             //     .ThenInclude(h => h.Towns)
              .Include(x => x.Tour)
             //     .ThenInclude(h => h.TourReviews)
                .Include(x => x.Tour)
             //     .ThenInclude(h => h.WhereBuyTour)
                    .Include(x => x.Tour)
               //   .ThenInclude(h => h.PastUsers)
                       .Include(x => x.Tour)
              //    .ThenInclude(h => h.Users)
                    .Include(x => x.User)
             //   .ThenInclude(u => u.CurrentTour)
            .Include(x => x.User)
             //   .ThenInclude(u => u.UserChild)
            .Include(x => x.User)
             //   .ThenInclude(u => u.PastTours)
               .Include(x => x.User)
             //   .ThenInclude(u => u.SelectedTours)
                  .ToList();
        }

        public TourReview GetById(string Id)
        {
            return _context.TourReviews
                .Include(x => x.Tour)
             //    .ThenInclude(h => h.Towns)
             .Include(x => x.Tour)
            //     .ThenInclude(h => h.TourReviews)
               .Include(x => x.Tour)
              //   .ThenInclude(h => h.WhereBuyTour)
                   .Include(x => x.Tour)
             //    .ThenInclude(h => h.PastUsers)
                      .Include(x => x.Tour)
               //  .ThenInclude(h => h.Users)

                   .Include(x => x.User)
             //   .ThenInclude(u => u.CurrentTour)
            .Include(x => x.User)
           //     .ThenInclude(u => u.UserChild)
            .Include(x => x.User)
             //   .ThenInclude(u => u.PastTours)
               .Include(x => x.User)
             //   .ThenInclude(u => u.SelectedTours)
                 .FirstOrDefault(x => x.Id == Id);
        }

        public TourReview GetByName(string name)
        {
            return _context.TourReviews
          .Include(x => x.Tour)
         //  .ThenInclude(h => h.Towns)
       .Include(x => x.Tour)
        //   .ThenInclude(h => h.TourReviews)
         .Include(x => x.Tour)
         //  .ThenInclude(h => h.WhereBuyTour)
             .Include(x => x.Tour)
         //  .ThenInclude(h => h.PastUsers)
                .Include(x => x.Tour)
         //  .ThenInclude(h => h.Users)
           .Include(x => x.User)
           //     .ThenInclude(u => u.CurrentTour)
            .Include(x => x.User)
            //    .ThenInclude(u => u.UserChild)
            .Include(x => x.User)
            //    .ThenInclude(u => u.PastTours)
               .Include(x => x.User)
             //   .ThenInclude(u => u.SelectedTours)
           .FirstOrDefault(x => x.User.UserName == name);
        }

        public void Update(TourReview _object)
        {
            _context.TourReviews.Update(_object);
            _context.SaveChanges();
        }
    }
}
