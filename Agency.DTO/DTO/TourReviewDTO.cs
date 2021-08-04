
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO


{

    public class TourReviewDTO
    {
       
        public string Id { get; set; }

     

        public  string    Tour { get; set; }

      
        public string User { get; set; }

        
         public string Review { get; set; }
        

        public int Grade { get; set; }
    }
}
