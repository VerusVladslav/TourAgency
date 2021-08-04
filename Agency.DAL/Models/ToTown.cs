namespace Agency.DAL.Models

{
    public class ToTown
    {
        public string TransportId { get; set; }
        public string TownId { get; set; }

        public virtual Town Town { get; set; }
        public virtual Transport Transport { get; set; }
    }
}
