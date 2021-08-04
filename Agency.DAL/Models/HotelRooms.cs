using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblHotelRoom")]
    public class HotelRooms
    {
       // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        public int Number { get; set; }

        public float CostinDoldarsForOneDay { get; set; }


        public virtual Hotel Hotel { get; set; }

        public virtual ICollection<ApplicationUser> Users { get; set; }

        public HotelRooms()
        {
            Users = new List<ApplicationUser>();
        }

        public int Count { get; set; }
    }
}
