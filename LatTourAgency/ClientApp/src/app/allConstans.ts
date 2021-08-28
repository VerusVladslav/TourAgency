
let applicationPaths: ApplicationPath = {
    GetTourById: "/api/Tour/ById/",

    //  GetTourById:"/api/Tour/ById/",
    AddTour: "/api/Tour/Add",
    UpdateTour: "/api/Tour/Update",
    DeleteTour: "/api/Tour/Delete/",
    GetAllTours: "/api/Tour/All",
    Register: "/api/User/Register",
    AddTourGallery: "/api/Tour/AddGallery/",
    GetFilteredTours: "/api/Tour/Filter",
    GetTourGallery: "/api/Tour/GetGallery/",
    UpdateTourGallery: "/api/Tour/UpdateGallery/",
    DeleteRangeTour: "/api/Tour/DeleteRange",


    GetAllHotels: "/api/Hotel/All",
    GetHotelsByTownId: "/api/Hotel/ByTownId/",
    GetHotelById: "/api/Hotel/ById/",
    AddHotel: "/api/Hotel/Add",
    AddHotelRoomsToHotel: "/api/HotelRoom/Add/",
    GetHotelRoomsHotel: "/api/HotelRoom/All/",
    UpdateHotelRoomsHotel: "/api/HotelRoom/Update/",
    //  DeleteHotelRoomsHotel:"/api/HotelRoom/Delete/",

    AddFoodsToHotel: "/api/Food/Add/",
    GetFoodsHotel: "/api/Food/All/",
    UpdateFoodsHotel: "/api/Food/Update/",
    //  DeleteFoodsHotel:"/api/Food/Delete/",
    GetAllHotelService: "/api/HotelService/All/",



    GetBeachServiceByHotelId: "/api/Hotel/GetBeach/",

    GetGeneralServiceByHotelId: "/api/Hotel/GetGeneral/",
    GetForKidsServiceByHotelId: "/api/Hotel/GetForKids/",
    GetSportServiceByHotelId: "/api/Hotel/GetSport/",

    AddServiceByHotelId: "/api/HotelService/Add/",
    UpdateServiceByHotelId: "/api/HotelService/Update/",
    //  DeleteServiceByHotelId:"/api/HotelService/Delete/",


    DeleteHotel: "/api/Hotel/Delete/",
    UpdateHotel: "/api/Hotel/Update",
    HotelRemoveRange: "/api/Hotel/DeleteRange/",


    GetAllTowns: "/api/Town/All",
    GetTownById: "/api/Town/ById/",
    AddTown: "/api/Town/Add",
    DeleteTown: "/api/Town/Delete/",
    UpdateTown: "/api/Town/Update",
    TownRemoveRange: "/api/Town/DeleteRange/",


    AddReview: "/api/TourReview/Add",
    GetReviews: "/api/TourReview/",



    CheckLogin:"/api/User/checkLogin",
    Login:"/api/User/login"

}

interface ApplicationPath {
    readonly GetAllTours: string;
    readonly Register: string;
    readonly GetTourById: string;
    readonly AddTour: string;
    readonly DeleteTour: string;
    readonly DeleteRangeTour: string;

    readonly UpdateTour: string;
    readonly AddTourGallery: string;
    readonly GetTourGallery: string;
    readonly UpdateTourGallery: string;

    readonly GetFilteredTours: string;

    readonly GetAllHotelService: string;

    readonly GetAllHotels: string;
    readonly GetHotelsByTownId: string;

    readonly GetHotelById: string;
    readonly AddHotel: string;
    readonly AddHotelRoomsToHotel: string;
    readonly GetHotelRoomsHotel: string;
    readonly UpdateHotelRoomsHotel: string;


    readonly HotelRemoveRange: string;
    readonly AddFoodsToHotel: string;
    readonly GetFoodsHotel: string;
    readonly UpdateFoodsHotel: string;
    readonly DeleteHotel: string;
    readonly UpdateHotel: string;

    readonly GetBeachServiceByHotelId: string;
    readonly GetGeneralServiceByHotelId: string;
    readonly GetForKidsServiceByHotelId: string;
    readonly GetSportServiceByHotelId: string;

    readonly AddServiceByHotelId: string;
    readonly UpdateServiceByHotelId: string;
    readonly AddReview: string;
    readonly GetReviews: string;

    //  readonly DeleteServiceByHotelId: string;



    readonly TownRemoveRange: string;
    readonly GetAllTowns: string;
    readonly GetTownById: string;
    readonly AddTown: string;
    readonly DeleteTown: string;
    readonly UpdateTown: string;




    readonly CheckLogin: string;
    readonly Login: string;
 


}

let NavigationRoutes: NavigationPath = {
    Login: "login-page",

    
    Register: "register",
    Logout: "logout",
    Filter: "filter-tour",
    CrudTour: "crud-tour",
    CrudHotel: "crud-hotel",
    CrudTown: "crud-town",
    Home: "/",
    TourList: "tour-list"
   
}

interface NavigationPath {
    readonly Login: string;
    readonly Register: string;
    readonly Logout: string;
    readonly Filter: string;
    readonly CrudTour: string;
    readonly CrudHotel: string;
    readonly CrudTown: string;
    readonly Home: string;
    readonly TourList: string;


}

interface FoodConst {

    readonly Food_Ultra: string;
    readonly Food_AllInclusive: string;
    readonly Food_FullPassion: string;
    readonly Food_Breakfast: string;
    readonly Food_Dinner: string;
    readonly Food_Without: string;

}


let Food: FoodConst = {
    Food_Ultra: "Ultra",
    Food_AllInclusive: "All inclusive",
    Food_FullPassion: "Full passion",
    Food_Dinner: "Dinner",
    Food_Breakfast: "Breakfast",
    Food_Without: "Without"
}



interface ServiceConstants {

    readonly Beach: string;
    readonly Sport: string;
    readonly ForKids: string;
    readonly General: string;


}


let Service: ServiceConstants = {
    Beach: "Beach",
    Sport: "Sport",
    ForKids: "For kids",
    General: "General"

}






interface ForKidsHotelServiceConstants {


    readonly Children_swimming_pool: string;
    readonly Рighchairs_in_the_restaurant: string;
    readonly Сot: string;
    readonly Payground: string;
    readonly Mini_club: string;
    readonly Children_room: string;
    readonly Children_menu_in_the_restaurant: string;
    readonly Nanny: string;

}

let ForKidsServiceCost: ForKidsHotelServiceConstants = {

    Children_swimming_pool: "Children swimming pool",
    Рighchairs_in_the_restaurant: "Рighchairs in the restaurant",
    Сot: "Cot",
    Payground: "Payground",
    Mini_club: "Mini-club",
    Children_room: "Children room",
    Children_menu_in_the_restaurant: "Children menu in the restaurant",
    Nanny: "Nanny"
};

interface EntertainmentAndSportHotelServiceConstants {

    readonly Sauna: string;
    readonly Bath: string;
    readonly Hamam: string;
    readonly Aerobics: string;
    readonly Aquapark: string;
    readonly Disco: string;
    readonly Diving: string;
    readonly Event_organization_service: string;
    readonly Pontoon: string;
    readonly Pier: string;
    readonly Jacuzzi: string;
    readonly Spa_center: string;
    readonly Wellness_center: string;
    readonly Billiards: string;
    readonly Table_tennis: string;
    readonly Tennis_court: string;
    readonly Volleyball: string;
    readonly Bike_rental: string;
    readonly Fitness_center: string;
    readonly Gym: string;
    readonly Windsurfing: string;
    readonly Animation: string;
    readonly Organization_of_excursions: string;
    readonly Golf: string;
    readonly Water_sports_on_the_beach: string;


}

let EntertainmentAndSportCostants: EntertainmentAndSportHotelServiceConstants = {
    Sauna: "Sauna",
    Bath: "Bath",
    Hamam: "Hamam",
    Aerobics: "Aerobics",
    Aquapark: "Aquapark",
    Disco: "Disco",
    Diving: "Diving",
    Event_organization_service: "Event organization service",
    Pontoon: "Pontoon",
    Pier: "Pier",
    Jacuzzi: "Jacuzzi",
    Spa_center: "Spa-center",
    Wellness_center: "Wellness_center",
    Billiards: "Billiards",
    Table_tennis: "Table-tennis",
    Tennis_court: "Tennis-court",
    Volleyball: "Volleyball",
    Bike_rental: "Bike rental",
    Fitness_center: "Fitness center",
    Gym: "Gym",
    Windsurfing: "Windsurfing",
    Animation: "Animation",
    Organization_of_excursions: "Organization of excursions",
    Golf: "Golf",
    Water_sports_on_the_beach: "Water sports on the beach"
};
interface BeachHotelServiceConstants {
    readonly Own: string;
    readonly Sandy: string;
    readonly Sun_loungers: string;
    readonly Umbrellas: string;
    readonly Beach_towels: string;
    readonly Windsurfing: string;
    readonly Urban: string;
    readonly Sandy_pebble: string;

}

let BeachHotelConstants: BeachHotelServiceConstants = {

    Own: "Own",
    Sandy: "Sandy",
    Sun_loungers: "Sun loungers",
    Umbrellas: "Umbrellas",
    Beach_towels: "Beach towels",
    Windsurfing: "Windsurfing",
    Urban: "Urban",
    Sandy_pebble: "Sandy pebble"
};







interface GeneralHotelServiceConstants {

    readonly Restaurant: string;
    readonly Cafe: string;
    readonly Bar: string;
    readonly Open_pool: string;
    readonly Conference_hall: string;
    readonly Parking: string;
    readonly Car_rental: string;
    readonly Safe: string;
    readonly Wi_Fi: string;
    readonly Elevator: string;
    readonly Payment_by_payment_cards: string;
    readonly Laundry: string;
    readonly Beauty_saloon: string;
    readonly Currency_exchange: string;
    readonly Doctor: string;
    readonly Elconditions_for_disabled_people: string;
    readonly Non_smoking_rooms: string;
    readonly Transfer_to_from_the_airport: string;
    readonly Late_check_out: string;

}

let GenerelServiceConst: GeneralHotelServiceConstants = {
    Restaurant: "Restaurant",
    Cafe: "Cafe",
    Bar: "Bar",
    Open_pool: "Open pool",
    Conference_hall: "Conference hall",
    Parking: "Parking",
    Car_rental: "Car rental",
    Safe: "Safe",
    Wi_Fi: "Wi-Fi",
    Elevator: "Elevator",
    Payment_by_payment_cards: "Payment by payment cards",
    Laundry: "Laundry",
    Beauty_saloon: "Beauty saloon",
    Currency_exchange: "Currency exchange",
    Doctor: "Doctor",
    Elconditions_for_disabled_people: "Elconditions for disabled people",
    Non_smoking_rooms: "Non smoking rooms",
    Transfer_to_from_the_airport: "Transfer to from the airport",
    Late_check_out: "Transfer to from the airport"
};




interface HotelRommsConst {
    readonly Vip: string;
    readonly Single: string;
    readonly Double: string;
    readonly Triple: string;
    readonly Extra_Bed: string;
    readonly Child: string;


}

let HotelRoom: HotelRommsConst = {
    Vip: "Vip",
    Single: "Single",
    Double: "Double",
    Triple: "Triple",
    Extra_Bed: "Extra Bed",
    Child: "Child"
}








export const ForKidsServiceCostants: ForKidsHotelServiceConstants = ForKidsServiceCost;
export const EntertainmentAndSportServiceCostants: EntertainmentAndSportHotelServiceConstants = EntertainmentAndSportCostants;
export const BeachHotelServiceConstants: BeachHotelServiceConstants = BeachHotelConstants;
export const GenerelServiceConstants: GeneralHotelServiceConstants = GenerelServiceConst;

export const Navigation:NavigationPath = NavigationRoutes;

export const HotelRoomConstants: HotelRommsConst = HotelRoom;

export const HotelServiceConstants: ServiceConstants = Service;
export const FoodConstants: FoodConst = Food;
export const ApplicationRoutes: ApplicationPath = applicationPaths;