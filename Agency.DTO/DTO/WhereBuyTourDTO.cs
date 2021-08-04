using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO


{

    public class WhereBuyTourDTO
    {
      
        public string Id { get; set; }

   
        public string FirmTitle { get; set; }

    
        public string  Address { get; set; }

       
        public string Image { get; set; }

      
        public string PhoneNumber { get; set; }

       
      
        public string Telegram { get; set; }

      
    }
}
