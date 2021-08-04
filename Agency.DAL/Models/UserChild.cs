using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models

{
    public class UserChild
    {
       // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }


        public DateTime Birth { get; set; }






        public virtual ApplicationUser Parent { get; set; }




    }
}
