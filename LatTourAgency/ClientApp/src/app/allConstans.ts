
let applicationPaths : ApplicationPath = {
    GetTourById:"/api/Tour/ById/",
    AddTour:"/api/Tour/Add",
    UpdateTour:"/api/Tour/Update",
    DeleteTour:"/api/Tour/Delete/",
    GetAllTours:"/api/Tour/All",
    Register:"/api/User/Register",

    GetAllHotels:"/api/Hotel/All",
    GetHotelById:"/api/Hotel/ById/",
    AddHotel:"/api/Hotel/Add",
    DeleteHotel:"/api/Hotel/Delete/",
    UpdateHotel:"/api/Hotel/Update",
    HotelRemoveRange:"/api/Hotel/DeleteRange/",


    GetAllTowns:"/api/Town/All",
    GetTownById:"/api/Town/ById/",
    AddTown:"/api/Town/Add",
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