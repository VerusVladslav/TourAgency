using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models


{
    [Table("tblTransport")]

    public class Transport
    {
       // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }

        public virtual FromTown From { get; set; }

        public virtual ToTown To { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public float CostinDoldars { get; set; }



    }
}
