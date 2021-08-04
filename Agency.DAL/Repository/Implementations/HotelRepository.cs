using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Agency.DAL.Repository.Abstraction

{
    public class HotelRepository : IRepository<Hotel>
    {
        ApplicationDbContext _context;

        public HotelRepository(ApplicationDbContext context)
        {
            _context = context;

        }

        public void Create(Hotel _object)
        {
            _context.Hotels.Add(_object);
            _context.SaveChanges();
        }

        public void Delete(Hotel _object)
        {
            _context.Hotels.Remove(_object);
            _context.SaveChanges();
        }

        public IEnumerable<Hotel> GetAll()
        {
            return _context.Hotels
                .Include(x => x.Town)
                 //   .ThenInclude(t => t.Tours)
                .Include(x => x.Town)
                //    .ThenInclude(t => t.FromTown)
                .Include(x => x.Town)
                //    .ThenInclude(t => t.ToTown)
               
                .Include(x => x.HotelRooms)
                .ToList();

        }

        public Hotel GetById(string Id)
        {
            return _context.Hotels
                .Include(x => x.Town)
                //    .ThenInclude(t => t.Tours)
                .Include(x => x.Town)
                 //   .ThenInclude(t => t.FromTown)
                .Include(x => x.Town)
                 //   .ThenInclude(t => t.ToTown)
               
                .Include(x => x.HotelRooms)
                .FirstOrDefault(x => x.id == Id);
        }

        public Hotel GetByName(string name)
        {
            return _context.Hotels
                 .Include(x => x.Town)
                    // .ThenInclude(t => t.Tours)
                 .Include(x => x.Town)
                   //  .ThenInclude(t => t.FromTown)
                 .Include(x => x.Town)
                  //   .ThenInclude(t => t.ToTown)
                
                 .Include(x => x.HotelRooms)
                .FirstOrDefault(x => x.Name == name);

        }

        public void Update(Hotel _object)
        {
            _context.Hotels.Update(_object);
            _context.SaveChanges();
        }
    }
}
