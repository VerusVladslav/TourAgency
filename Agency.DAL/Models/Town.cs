using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models

{
    [Table("tblTown")]
    public class Town
    {
      //  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<Hotel> Hotels { get; set; }

        public virtual ICollection<TourTown> Tours { get; set; }

        public virtual ICollection<FromTown> FromTown { get; set; }
        public virtual ICollection<ToTown> ToTown { get; set; }


        public Town()
        {
            FromTown = new List<FromTown>();
            ToTown = new List<ToTown>();

            Tours = new List<TourTown>();
            Hotels = new List<Hotel>();
        }
    }
}
