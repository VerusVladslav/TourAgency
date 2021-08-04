using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblCurrentTour")]
    public class CurrentTour
    {
       // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }




        public virtual ICollection<ApplicationUser> Users { get; set; }

        //   public virtual ICollection<UserChild> Childs { get; set; }


        public virtual Tour Tour { get; set; }



        public virtual Food BreakFest { get; set; }


        public virtual Food Lunch { get; set; }


        public virtual Food Dinner { get; set; }


        public CurrentTour()
        {
            Users = new List<ApplicationUser>();
            //   Childs = new List<UserChild>();

        }

    }

}
