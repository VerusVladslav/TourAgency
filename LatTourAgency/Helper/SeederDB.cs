
using Agency.BLL.Service.SeederServices;
using Agency.DAL.Data;
using Agency.DAL.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Dimol.Helper
{
    public class SeederDB
    {
        public static void SeedData(IServiceProvider services,
         IWebHostEnvironment env,
         IConfiguration config)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                SeedDB(manager, managerRole, context);
            }
        }
        private static void SeedDB(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            ApplicationDbContext context)
        {
            CreateFood(context);

            CreateChild(context);
            CreteTour(context);
            CreteTown(context);
            CreateCurrentTour(context);

            CreateHotel(context);
            CreateHotelRoom(context);

            CreateWhereBuy(context);
            CreateTransport(context);


            CreateUserAndRoles(userManager, roleManager, context);
            CreateTourReview(context);

        }

        private static void CreateTransport(ApplicationDbContext context)
        {
            context.Transports.Add(SeedCreate.CreateTransport(Constants.Bus, DateTime.Now, DateTime.Today, 20));
            

            context.SaveChanges();
        }

        private static void CreateWhereBuy(ApplicationDbContext context)
        {
            context.WhereBuyTours.Add(new WhereBuyTour()
            {
               Address="Address",
               FirmTitle="Title",
               Image= "https://image.geze.com/im/StageSpezial/pboxx-pixelboxx-619726/Des",
               PhoneNumber="+38000000000",
               Telegram="Telegram"
               
            });
            context.SaveChanges();
        }

        private static void CreateTourReview(ApplicationDbContext context)
        {
            context.TourReviews.Add(new TourReview()
            {
                Grade=5,
                Review="Review",
                Tour=context.Tours.FirstOrDefault(),
              //  User=context.ApplicationUsers.FirstOrDefault()
            });
            context.SaveChanges();
        }

        private static void CreateHotelRoom(ApplicationDbContext context)
        {

            var room = SeedCreate.CreateHotelRooms(2, 2, 20);
            room.Hotel = context.Hotels.FirstOrDefault();

            context.HotelRooms.Add(room);
            context.SaveChanges();
        }

        private static void CreateHotel(ApplicationDbContext context)
        {
            context.Hotels.Add(new Hotel()
            {
                Address = "Address",
                Services = "Services",
                Sport = "Sport",
                Stars = 5,
                Beach = "Beach",
                Description = "Description",
                ForKids = "ForsKids",
                MainImage = "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
                Name = "Benidorm",
                RoomAmenities = "RoomAmenties",
                Town = context.Towns.FirstOrDefault()
            });
            context.SaveChanges();
        }

        private static void CreteTown(ApplicationDbContext context)
        {
            var Kyiv = SeedCreate.CreateTown("Kyiv");
            var Paris = SeedCreate.CreateTown("Paris");

            context.Towns.AddRange(Kyiv, Paris);
            context.SaveChanges();

        }

        private static void CreateCurrentTour(ApplicationDbContext context)
        {
            var firstCurentTour = new CurrentTour()
            {

                Tour = context.Tours.FirstOrDefault(),
                BreakFest = context.Foods.FirstOrDefault(),
                Dinner = context.Foods.FirstOrDefault(),
                Lunch = context.Foods.Where(x => x.Foods == "second food").FirstOrDefault(),



            };

            context.CurrentTours.Add(firstCurentTour);
            context.SaveChanges();
            //    var secondCurentTour = SeedCreate.CreateTour("Second tour", "https://lh3.googleusercontent.com/proxy/QY-iFHKuGrug9nrEuf9m8ifVyMYqZUpP3B1Jtvf5IQojM0yViND7mxJ1xbpUnXdpxxSM19y67Ztq6VYl1-o3CTfDmQij", 4);

        }

        private static void CreteTour(ApplicationDbContext context)
        {
            var firstTour = SeedCreate.CreateTour("First tour", 
                "https://www.englishdom.com/dynamicus/blog-post/000/001/481/1532681668_content_700x455.jpg?1532681668602",
                5,"Description","ShortDescription",200);
            var secondTour = SeedCreate.CreateTour("Second tour", 
                "https://lh3.googleusercontent.com/proxy/QY-iFHKuGrug9nrEuf9m8ifVyMYqZUpP3B1Jtvf5IQojM0yViND7mxJ1xbpUnXdpxxSM19y67Ztq6VYl1-o3CTfDmQij",
                4, "Description", "ShortDescription", 150);

            context.AddRange(firstTour, secondTour);

            context.SaveChanges();
        }

        private static void CreateChild(ApplicationDbContext context)
        {
            var first = SeedCreate.CreateUserChild("child", DateTime.Now);
            var secondchild = SeedCreate.CreateUserChild("secondchild", DateTime.Today);

            //  first.Id = ;
            //  secondchild.Id = Guid.NewGuid().ToString();


            context.UserChild.Add(first);
            context.UserChild.Add(secondchild);

            context.SaveChanges();

        }

        private static void CreateFood(ApplicationDbContext context)
        {
            var firstfood = SeedCreate.CreateFood("food", "food desc",2);
            var second = SeedCreate.CreateFood("second food", "second food desc",2);

            context.AddRange(firstfood, second);

            context.SaveChanges();
        }

        private static void CreateUserAndRoles(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            ApplicationDbContext context)
        {
            //   if (roleManager.FindByNameAsync(Constants.Admin).Result == null)

            var resultAdminRole = roleManager.CreateAsync(new IdentityRole
            {
                Name = Constants.Admin
            }).Result;

            //   if(roleManager.FindByNameAsync(Constants.User).Result == null)

            var resultUserRole = roleManager.CreateAsync(new IdentityRole
            {
                Name = Constants.User
            }).Result;



            var admin = SeedCreate.CreateUser("admin@gmail.com", "admin@gmail.com", "adminsurname", DateTime.Now);
            var user = SeedCreate.CreateUser("user@gmail.com", "user@gmail.com", "usersurname", DateTime.Now);


            //      if (roleManager.FindByNameAsync(Constants.Admin).Result == null)


            var resultAdmin = userManager.CreateAsync(admin, "Qwerty1-").Result;
            resultAdmin = userManager.AddToRoleAsync(admin, Constants.Admin).Result;


            //     if (roleManager.FindByNameAsync(Constants.User).Result == null)


            var resultUser = userManager.CreateAsync(user, "Qwerty1-").Result;
            resultUser = userManager.AddToRoleAsync(user, Constants.User).Result;




            //   }

            context.SaveChanges();

        }
    }
}