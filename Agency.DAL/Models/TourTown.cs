namespace Agency.DAL.Models

{
    public class TourTown
    {
        public string TourId { get; set; }
        public string TownId { get; set; }

        public virtual Tour Tour { get; set; }
        public virtual Town Town { get; set; }


    }
}
