using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agency.DTO

{
    public class UserChildDTO
    {
       
        public string Id { get; set; }

        public string Name { get; set; }


        public DateTime Birth { get; set; }

        public string   Parent { get; set; }

       


    }
}
