using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Agency.DAL.Models

{
    [Table("tblImageTour")]
    public class ImageTour
    {
       // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public string Id { get; set; }

        public string Path { get; set; }



        public virtual Tour Tour { get; set; }
    }
}
