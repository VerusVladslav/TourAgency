using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblWhereBuyTour")]
    public class WhereBuyTour
    {
      //  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        [Required]
        public string FirmTitle { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string PhoneNumber { get; set; }


        public virtual ICollection<WhereBuyTourTable> Tours { get; set; }

        [Required]
        public string Telegram { get; set; }

        public WhereBuyTour()
        {
            Tours = new List<WhereBuyTourTable>();
        }
    }
}
