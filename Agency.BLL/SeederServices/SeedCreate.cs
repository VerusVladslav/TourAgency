
using Agency.DAL.Models;
using System;

namespace Agency.BLL.Service.SeederServices
{
    public class SeedCreate
    {
        public static Food CreateFood(string Foods, string Description, float cost)
        {
            return new Food()
            {
                //   Id=Guid.NewGuid().ToString(),
                Foods = Foods,
                Description = Description,
                CostinDoldars = cost
            };
        }


        public static Hotel CreateHotel(string name, string address, string description, string services, string mainiamge, int stars)
        {
            return new Hotel()
            {
                //  id = Guid.NewGuid().ToString(),
                Name = name,
                Address = address,
                Description = description,
                Services = services,
                Stars = stars,
                MainImage = mainiamge
            };
        }


        public static ApplicationUser CreateUser(string Email, string Username, string surname, DateTime birth)
        {
            return new ApplicationUser()
            {
                //  Id = Guid.NewGuid().ToString(),
                Email = Email,
                UserName = Username,
                Surname = surname,
               
                Birth = birth

            };
        }

        public static Town CreateTown(string name)
        {
            return new Town()
            {
                //   Id=Guid.NewGuid().ToString(),
                Name = name
            };
        }

        public static Tour CreateTour(string name, string imagePath, int grade,string desc, string shortdesc,float cost)
        {
            return new Tour()
            {
                //   Id = Guid.NewGuid().ToString(),
                Name = name,
                MainImage = imagePath,
                Grade = grade,
                Description=desc,
                ShortDescription=shortdesc,
                CostinDoldars=cost
                
            };
        }
        public static HotelRooms CreateHotelRooms(int number, int count, float cost)
        {
            return new HotelRooms()
            {
                //    Id = Guid.NewGuid().ToString(),

                Number = number,
                Count = count,
                CostinDoldarsForOneDay = cost
            };
        }

        //public static ImageTour CreateImageTour(string Path)
        //{
        //    return new ImageTour()
        //    {
        //        //   Id = Guid.NewGuid().ToString(),

        //        Path = Path
        //    };
        //}


        //public static ImageHotel CreateImageHotel(string Path)
        //{
        //    return new ImageHotel()
        //    {
        //        //   Id = Guid.NewGuid().ToString(),

        //        Path = Path
        //    };
        //}

        public static TourReview CreateTourReview(string Review, int grade)
        {
            return new TourReview()
            {

                //  Id = Guid.NewGuid().ToString(),
                Review = Review,
                Grade = grade
            };
        }

        public static Transport CreateTransport(string Name, DateTime start, DateTime End, float cost)
        {
            return new Transport()
            {
                //    id = Guid.NewGuid().ToString(),
                Name = Name,
                Start = start,
                End = End,
                CostinDoldars = cost
            };
        }


        public static UserChild CreateUserChild(string name, DateTime birth)
        {
            return new UserChild()
            {
                // Id = Guid.NewGuid().ToString(),
                Name = name,
                Birth = birth

            };
        }

    }
}
