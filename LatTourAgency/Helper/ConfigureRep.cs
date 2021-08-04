using Agency.BLL.Service.Authentification;
using Agency.DAL.Repository.Abstraction;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.DependencyInjection;


namespace Agency.Helper
{
    public class ConfigureRep
    {
        public static void ConfigureRepository(IServiceCollection services)
        {
            services.AddTransient<CurrentTourRepository>();
            services.AddTransient<FoodRepository>();
            services.AddTransient<HotelRoomRepository>();
            services.AddTransient<HotelRepository>();
        
            services.AddTransient<TourReviewRepository>();
            services.AddTransient<TourRepository>();
            services.AddTransient<TownRepository>();
            services.AddTransient<TransportRepository>();
            services.AddTransient<UserChildRepository>();
            
            services.AddTransient<WhereBuyRepository>();
            services.AddTransient<IEmailSender, EmailSender>();



        }
    }
}
