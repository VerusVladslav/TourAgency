using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO

{

    public  class ImageTourDTO
    {
        
        public string Id { get; set; }

        public string Path { get; set; }

      

        public  string    Tour { get; set; }
    }
}
