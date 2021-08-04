namespace Agency.DAL.Models


{
    public class WhereBuyTourTable
    {
        public virtual Tour Tour { get; set; }
        public virtual WhereBuyTour WhereBuy { get; set; }

        public string TourId { get; set; }
        public string WhereBuyId { get; set; }
    }
}
