
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO


{

    public class HotelDTO
    {
        
        public string Id { get; set; }
       
        public string Name { get; set; }
      
        public string Address { get; set; }
        
        public string Description { get; set; }
       
        public string Services { get; set; }

       
        public int Stars { get; set; }

    
        public string Town { get; set; }

       
        
        public string MainImage { get; set; }

     

        public string RoomAmenities { get; set; }

        public string Beach { get; set; }
        public string Sport { get; set; }
        public string ForKids { get; set; }


       
    }
}
