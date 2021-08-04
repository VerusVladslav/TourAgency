using Agency.DAL.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Agency.DAL.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }

      
        public DbSet<CurrentTour> CurrentTours { get; set; }

        public DbSet<Food> Foods { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<HotelRooms> HotelRooms { get; set; }
        public DbSet<Tour> Tours { get; set; }
        public DbSet<TourReview> TourReviews { get; set; }
        public DbSet<Transport> Transports { get; set; }
        public DbSet<Town> Towns { get; set; }
     

        public DbSet<UserChild> UserChild { get; set; }

        public DbSet<WhereBuyTour> WhereBuyTours { get; set; }





        protected override void OnModelCreating(ModelBuilder builder)
        {







            builder.Entity<WhereBuyTourTable>(WhereBuyTour =>
            {
                WhereBuyTour.HasKey(ur => new { ur.TourId, ur.WhereBuyId });

                WhereBuyTour.HasOne(ur => ur.Tour)
                    .WithMany(r => r.WhereBuyTour)
                    .HasForeignKey(ur => ur.TourId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); ;

                WhereBuyTour.HasOne(ur => ur.WhereBuy)
                    .WithMany(r => r.Tours)
                    .HasForeignKey(ur => ur.WhereBuyId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); ;
            });


            builder.Entity<ApplicationUser>(AppUser =>
            {
                //AppUser.HasKey(c => c.);
                AppUser.HasOne(u => u.CurrentTour)
                    .WithMany(c => c.Users)
                    .OnDelete(DeleteBehavior.ClientCascade); ;
                   
                //    .OnDelete(DeleteBehavior.Cascade);

                AppUser.HasMany(au => au.ReviewTour)
                     .WithOne(au => au.User)
                     .OnDelete(DeleteBehavior.ClientCascade); 

                AppUser.HasMany(au => au.UserChild)
                   .WithOne(au => au.Parent)
                   .OnDelete(DeleteBehavior.ClientCascade);
                //   .OnDelete(DeleteBehavior.Cascade);
                //AppUser.HasMany(au => au.SelectedTours)
                //      .WithMany(au => au.Users);
            });


            builder.Entity<TourUser>(TourUser =>
            {
                TourUser.HasKey(tu => new { tu.TourId, tu.UserId });

                TourUser.HasOne(tu => tu.Tour)
                    .WithMany(t => t.Users)
                     .HasForeignKey(ur => ur.TourId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 

                TourUser.HasOne(tu => tu.ApplicationUser)
                    .WithMany(t => t.SelectedTours)
                     .HasForeignKey(ur => ur.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 
            });

            builder.Entity<PastTourUser>(PastTourUser =>
            {
                PastTourUser.HasKey(tu => new { tu.TourId, tu.UserId });

                PastTourUser.HasOne(tu => tu.Tour)
                    .WithMany(t => t.PastUsers)
                     .HasForeignKey(ur => ur.TourId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 

                PastTourUser.HasOne(tu => tu.ApplicationUser)
                    .WithMany(t => t.PastTours)
                     .HasForeignKey(ur => ur.UserId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 
            });

            builder.Entity<TourTown>(TourTown =>
            {
                TourTown.HasKey(tu => new { tu.TourId, tu.TownId });

                TourTown.HasOne(tu => tu.Tour)
                    .WithMany(t => t.Towns)
                     .HasForeignKey(ur => ur.TourId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 

                TourTown.HasOne(tu => tu.Town)
                    .WithMany(t => t.Tours)
                     .HasForeignKey(ur => ur.TownId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 
            });
            builder.Entity<FromTown>(FromTown =>
            {
                FromTown.HasKey(tu => new { tu.TownId, tu.TransportId });

                FromTown.HasOne(tu => tu.Town)
                    .WithMany(t => t.FromTown)
                     .HasForeignKey(ur => ur.TownId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 

                FromTown.HasOne(tu => tu.Transport)
                    .WithOne(t => t.From)
                    .OnDelete(DeleteBehavior.ClientCascade); 
            });



            builder.Entity<ToTown>(ToTown =>
            {
                ToTown.HasKey(tu => new { tu.TownId, tu.TransportId });

                ToTown.HasOne(tu => tu.Town)
                    .WithMany(t => t.ToTown)
                     .HasForeignKey(ur => ur.TownId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.ClientCascade); 

                ToTown.HasOne(tu => tu.Transport)
                    .WithOne(t => t.To)
                    .OnDelete(DeleteBehavior.ClientCascade); 
            });

            //    builder.Entity<UserChild>(UserChild =>
            //{
            //    UserChild.HasNoKey();

            //    UserChild.HasOne(tu => tu.User)
            //        .WithOne(t => t.IfUserChild);

            //});

            //builder.Entity<UserChild>(UserChild =>
            //{


            //    UserChild.HasOne(tu => tu.User)
            //        .WithOne(t => t.IfUserChild)

            //});

            builder.Entity<Hotel>(hotel =>
            {

                hotel.HasOne(h => h.Town)
                    .WithMany(r => r.Hotels)
                    .OnDelete(DeleteBehavior.ClientCascade);
                ;
                hotel.HasMany(h => h.HotelRooms)
                    .WithOne(r => r.Hotel)
                    .OnDelete(DeleteBehavior.ClientCascade);
                ;

            });
            builder.Entity<HotelRooms>(rooms =>
            {
                rooms.HasOne(r => r.Hotel)
                        .WithMany(r => r.HotelRooms)
                        .HasForeignKey(r => r.Id)
                        .OnDelete(DeleteBehavior.ClientCascade); 
                rooms.HasMany(r => r.Users)
                        .WithOne()
                        .OnDelete(DeleteBehavior.ClientCascade);

            }
            );



            builder.Entity<Tour>(tour =>
            {
                tour.HasMany(t => t.Images)
                    .WithOne(i => i.Tour)
                    .OnDelete(DeleteBehavior.ClientCascade); 
                tour.HasMany(t => t.Users)
                    .WithOne(t => t.Tour)
                    .OnDelete(DeleteBehavior.ClientCascade); 
                tour.HasMany(t => t.TourReviews)
                    .WithOne(r => r.Tour)
                    .HasForeignKey(k => k.Id)
                    .OnDelete(DeleteBehavior.ClientCascade); 

                //tour.HasOne(t => t.Hotel)
                //    .WithMany(h => h.Tours)
                //      .OnDelete(DeleteBehavior.Cascade)         ;
                //tour.HasMany(t => t.WhereBuyTour)
                //    .WithMany(w => w.Tours);


            });
            base.OnModelCreating(builder);
        }



    }
}
