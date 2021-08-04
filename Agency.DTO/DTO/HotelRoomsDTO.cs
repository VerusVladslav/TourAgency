
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO


{

    public class HotelRoomsDTO
    {
      
        public string Id { get; set; }

        public int Number { get; set; }

        public float CostinDoldarsForOneDay { get; set; }


        public string Hotel { get; set; }



        public int Count { get; set; }
    }
}
