using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class HotelRoomRepository : IRepository<HotelRooms>
    {
        ApplicationDbContext _context;

        public HotelRoomRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(HotelRooms _object)
        {
            _context.HotelRooms.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(HotelRooms _object)
        {
            _context.HotelRooms.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<HotelRooms> GetAll()
        {
            return _context.HotelRooms
                    .Include(x => x.Hotel)
                      //  .ThenInclude(h => h.Town)
                    .Include(x => x.Hotel)
                     //   .ThenInclude(h => h.ImageHotels)

                    .Include(x => x.Users)
                    //    .ThenInclude(u => u.CurrentTour)
                    .Include(x => x.Users)
                    //    .ThenInclude(u => u.UserChild)
                     .Include(x => x.Users)
                   //     .ThenInclude(u => u.PastTours)
                     .Include(x => x.Users)
                   //     .ThenInclude(u => u.SelectedTours)
                     .Include(x => x.Users)
                    //    .ThenInclude(u => u.ReviewTour)
                    .ToList();
        }

        public HotelRooms GetById(string Id)
        {
            return _context.HotelRooms
              .Include(x => x.Hotel)
                  //      .ThenInclude(h => h.Town)
                    .Include(x => x.Hotel)
                  //      .ThenInclude(h => h.ImageHotels)

                    .Include(x => x.Users)
                    //    .ThenInclude(u => u.CurrentTour)
                    .Include(x => x.Users)
                   //     .ThenInclude(u => u.UserChild)
                     .Include(x => x.Users)
                    //    .ThenInclude(u => u.PastTours)
                     .Include(x => x.Users)
                    //    .ThenInclude(u => u.SelectedTours)
                     .Include(x => x.Users)
                   //     .ThenInclude(u => u.ReviewTour)
             .FirstOrDefault(x => x.Id == Id);
        }

        public HotelRooms GetByName(string name)
        {
            return _context.HotelRooms
            .Include(x => x.Hotel)
                    //    .ThenInclude(h => h.Town)
                    .Include(x => x.Hotel)
                      //  .ThenInclude(h => h.ImageHotels)

                    .Include(x => x.Users)
                     //   .ThenInclude(u => u.CurrentTour)
                    .Include(x => x.Users)
                     //   .ThenInclude(u => u.UserChild)
                     .Include(x => x.Users)
                      //  .ThenInclude(u => u.PastTours)
                     .Include(x => x.Users)
                    //    .ThenInclude(u => u.SelectedTours)
                     .Include(x => x.Users)
                     //   .ThenInclude(u => u.ReviewTour)
           .FirstOrDefault(x => x.Number == Int32.Parse(name));
        }

        public void Update(HotelRooms _object)
        {
            _context.HotelRooms.Update(_object);
            _context.SaveChanges();
        }
    }
}
