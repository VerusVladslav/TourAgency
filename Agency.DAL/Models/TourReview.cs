using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblTourReview")]
    public class TourReview
    {
      //  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }



        public virtual Tour Tour { get; set; }


        public virtual ApplicationUser User { get; set; }

        [Required]
        public string Review { get; set; }
        [Required]

        public int Grade { get; set; }
    }
}
