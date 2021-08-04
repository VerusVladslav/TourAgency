using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models

{
    [Table("tblFood")]
    public class Food
    {
      //  [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }
        public string Foods { get; set; }
        public string Description { get; set; }
        public DateTime Time { get; set; }
        public float CostinDoldars { get; set; }

    }
}
