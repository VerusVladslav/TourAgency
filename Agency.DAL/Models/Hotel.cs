using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblHotel")]
    public class Hotel
    {
      //  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Services { get; set; }

        [Required]
        public int Stars { get; set; }

        // [Required]
        public virtual Town Town { get; set; }

        //  [Required]
        [Required]
        public string MainImage { get; set; }

       


        public virtual ICollection<HotelRooms> HotelRooms { get; set; }

        public string RoomAmenities { get; set; }

        public string Beach { get; set; }
        public string Sport { get; set; }
        public string ForKids { get; set; }


        public Hotel()
        {
           
            HotelRooms = new List<HotelRooms>();

        }
    }
}
