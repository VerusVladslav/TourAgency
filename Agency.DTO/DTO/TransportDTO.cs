using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO


{


    public class TransportDTO
    {
       
        public string Id { get; set; }
        
        public string Name { get; set; }
       
        public string From { get; set; }
        
        public string To { get; set; }
       
        public DateTime Start { get; set; }
        
        public DateTime End { get; set; }

        public float CostinDoldars { get; set; }



    }
}
