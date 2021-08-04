
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models
{
    [Table("tblUser")]
    public class ApplicationUser : IdentityUser
    {
        //  public virtual ICollection<DbUserRole> UserRoles { get; set; }


        public string Surname { get; set; }

      

        public virtual CurrentTour CurrentTour { get; set; }

        public string Password { get; set; }


        public virtual ICollection<UserChild> UserChild { get; set; }

        public DateTime Birth { get; set; }


        public virtual ICollection<PastTourUser> PastTours { get; set; }
        public virtual ICollection<TourUser> SelectedTours { get; set; }
        public virtual ICollection<TourReview> ReviewTour { get; set; }



        public ApplicationUser()
        {
            PastTours = new List<PastTourUser>();
            SelectedTours = new List<TourUser>();
            ReviewTour = new List<TourReview>();
            UserChild = new List<UserChild>();
        }
    }
}
