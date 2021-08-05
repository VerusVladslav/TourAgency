
let applicationPaths : ApplicationPath = {
    GetTourById:"/api/Tour/",
    AddTour:"/api/Tour/AddTour",
    UpdateTour:"/api/Tour/Update",
    DeleteTour:"/api/Tour/Delete/",
    GetAllTours:"/api/Tour/AllTours",
    Register:"/api/User/Register"
}

interface ApplicationPath {
    readonly GetAllTours: string;
    readonly Register: string;
    readonly GetTourById: string;
    readonly AddTour: string;
    readonly DeleteTour: string;
    readonly UpdateTour: string;


}

export const ApplicationRoutes: ApplicationPath = applicationPaths;