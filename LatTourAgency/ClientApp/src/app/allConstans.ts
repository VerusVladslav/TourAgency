
let applicationPaths : ApplicationPath = {
    GetTourById:"/api/Tour/ById/",
    AddTour:"/api/Tour/AddTour",
    UpdateTour:"/api/Tour/Update",
    DeleteTour:"/api/Tour/Delete/",
    GetAllTours:"/api/Tour/AllTours",
    Register:"/api/User/Register",

    GetAllHotels:"/api/Hotel/AllHotels",
    GetHotelById:"/api/Hotel/ById/",
    AddHotel:"/api/Hotel/AddHotel",
    DeleteHotel:"/api/Hotel/Delete/",
    UpdateHotel:"/api/Hotel/Update",
    HotelRemoveRange:"/api/Hotel/DeleteRange/",


    GetAllTowns:"/api/Town/AllTowns",
    GetTownById:"/api/Town/ById/",
    AddTown:"/api/Town/AddTown",
    DeleteTown:"/api/Town/Delete/",
    UpdateTown:"/api/Town/Update",
    TownRemoveRange:"/api/Town/DeleteRange/"
}

interface ApplicationPath {
    readonly GetAllTours: string;
    readonly Register: string;
    readonly GetTourById: string;
    readonly AddTour: string;
    readonly DeleteTour: string;
    readonly UpdateTour: string;

    readonly GetAllHotels: string;
    readonly GetHotelById: string;
    readonly AddHotel: string;
    readonly DeleteHotel: string;
    readonly UpdateHotel: string;
    readonly HotelRemoveRange: string;


    readonly TownRemoveRange: string;
    readonly GetAllTowns: string;
    readonly GetTownById: string;
    readonly AddTown: string;
    readonly DeleteTown: string;
    readonly UpdateTown: string;
}

export const ApplicationRoutes: ApplicationPath = applicationPaths;