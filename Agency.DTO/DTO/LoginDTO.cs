using System.ComponentModel.DataAnnotations;

namespace Agency.DTO

{
    public class LoginDTO
    {
        [Required(ErrorMessage = "Email is requuired field")]
        [EmailAddress(ErrorMessage = "Invalid mail")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is requuired field")]
        public string Password { get; set; }
    }
}
