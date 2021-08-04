using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblTour")]
    public class Tour
    {
     //   [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string MainImage { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }


        public virtual ICollection<ImageTour> Images { get; set; }

        public virtual ICollection<TourTown> Towns { get; set; }


        public virtual ICollection<PastTourUser> PastUsers { get; set; }


        public virtual ICollection<TourUser> Users { get; set; }


        public virtual ICollection<TourReview> TourReviews { get; set; }


        public int Grade { get; set; }

        public float CostinDoldars { get; set; }

        public virtual ICollection<WhereBuyTourTable> WhereBuyTour { get; set; }


        public Tour()
        {
            Images = new List<ImageTour>();
            Towns = new List<TourTown>();
            PastUsers = new List<PastTourUser>();
            Users = new List<TourUser>();
            TourReviews = new List<TourReview>();


        }

    }
}
