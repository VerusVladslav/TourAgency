
using System;
using System.ComponentModel.DataAnnotations;

namespace Agency.DTO
{

    public class ApplicationUserDTO
    {

      //  public string Id  {  get; set;  }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }


       

        public string CurrentTour { get; set; }

        [Required(ErrorMessage = "Birth is required")]
        public DateTime Birth { get; set; }


       
    }
}
