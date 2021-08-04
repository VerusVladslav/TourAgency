using Agency.DAL.Models;
using Agency.DTO;
using AutoMapper;


namespace Agency.Utils
{
    public class MapperConfig : Profile
    {
        // CurrentTourService CurrentTourService;

        public MapperConfig()
        {


            CreateMap<CurrentTour, CurrentTourDTO>()
                .ForMember(x => x.Tour, y => y.MapFrom(z => z.Tour.Name))
                .ForMember(x => x.BreakFest, y => y.MapFrom(z => z.BreakFest.Foods))
                .ForMember(x => x.Dinner, y => y.MapFrom(z => z.Dinner.Foods))
                .ForMember(x => x.Lunch, y => y.MapFrom(z => z.Lunch.Foods));

            CreateMap<CurrentTourDTO, CurrentTour>()
             .ForMember(x => x.Tour, y => y.MapFrom(z => new Tour { Name = z.Tour }))
             .ForMember(x => x.BreakFest, y => y.MapFrom(z => new Food { Foods = z.BreakFest }))
             .ForMember(x => x.Dinner, y => y.MapFrom(z => new Food { Foods = z.Dinner }))
             .ForMember(x => x.Lunch, y => y.MapFrom(z => new Food { Foods = z.Lunch }));



            CreateMap<Food, FoodDTO>();
            CreateMap<FoodDTO, Food>();




            CreateMap<Hotel, HotelDTO>()
                .ForMember(x => x.Town, y => y.MapFrom(z => z.Town.Name));

            CreateMap<HotelDTO, Hotel>()
               .ForMember(x => x.Town, y => y.MapFrom(z => new Town { Name = z.Town }));


            CreateMap<HotelRooms, HotelRoomsDTO>()
               .ForMember(x => x.Hotel, y => y.MapFrom(z => z.Hotel.Name));

            CreateMap<HotelRoomsDTO, HotelRooms>()
                .ForMember(x => x.Hotel, y => y.MapFrom(z => new Hotel { Name = z.Hotel }));



         



            CreateMap<Tour, TourDTO>() ;
            CreateMap<TourDTO, Tour>();



            CreateMap<TourReview, TourReviewDTO>()
               .ForMember(x => x.Tour, y => y.MapFrom(z => z.Tour.Name))
               .ForMember(x => x.User, y => y.MapFrom(z => z.User.UserName));

            CreateMap<TourReviewDTO, TourReview>()
              .ForMember(x => x.Tour, y => y.MapFrom(z => new Tour { Name = z.Tour }))
              .ForMember(x => x.User, y => y.MapFrom(z => new ApplicationUser { UserName = z.User }));


            CreateMap<Town, TownDTO>();
            CreateMap<TownDTO, Town>();

            CreateMap<Transport, TransportDTO>()
               .ForMember(x => x.From, y => y.MapFrom(z => z.From.Town.Name))
               .ForMember(x => x.To, y => y.MapFrom(z => z.To.Town.Name));


            CreateMap<TransportDTO, Transport>()
                .ForMember(x => x.From, y => y.MapFrom(z => new FromTown { Town = new Town { Name = z.From } }))
                .ForMember(x => x.To, y => y.MapFrom(z => new ToTown { Town = new Town { Name = z.From } }));




            CreateMap<UserChild, UserChildDTO>()
              .ForMember(x => x.Parent, y => y.MapFrom(z => z.Parent.UserName));

            CreateMap<UserChildDTO, UserChild>()
                 .ForMember(x => x.Parent, y => y.MapFrom(z => new ApplicationUser { UserName = z.Parent }));


            CreateMap<WhereBuyTour, WhereBuyTourDTO>();
            CreateMap<WhereBuyTourDTO, WhereBuyTour>();



            CreateMap<ApplicationUser, ApplicationUserDTO>()
                .ForMember(x => x.CurrentTour, y => y.MapFrom(z => z.CurrentTour.Tour.Name));

            CreateMap<ApplicationUserDTO, ApplicationUser>()
                .ForMember(x => x.CurrentTour, y => y.MapFrom(z => new CurrentTour { Tour = new Tour { Name = z.CurrentTour } }));



        }
    }
}
