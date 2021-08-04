namespace Agency.DAL.Models


{
    public class PastTourUser
    {


        public string UserId { get; set; }
        public string TourId { get; set; }

        public Tour Tour { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
    }
}
