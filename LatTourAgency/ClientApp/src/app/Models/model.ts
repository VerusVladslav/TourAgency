

export class ApiResponse {
    public status?: number;
    public message?: string;

}

export class Hotel {

  

    public id?:string
    public name?: string = "";
    public mainImage?: string ="";
    public stars?: number = 0;
    public address?: string ="";
    public description?: string = "";
    public site?: string ="";
  
    public town?: string = "";
    public townId?: string;
  
  
   
    
    constructor( 
        name: string = "name", 
        mainimage: string ="Img", 
        stars: number= 5,
        town: string = "town",
        id:string ,
        address: string = "adress", 
        desc: string ="description",
        site: string ="site"
      
      
      
        ) {


        this.address = address;
        this.name = name;
        this.mainImage = mainimage;
        this.description = desc;
        this.stars = stars;
        this.site=site;
        this.id=id;
        this.town=town;
      

    }
}

export class Town {

    public id?: string;
    public name?: string = "";
    
    constructor( 
        name: string = "name",       
        id:string ) {
      
        this.name = name;     
        this.id=id;    

    }
}
export class Tour {
    public id?:string ;
    public name?: string = "";
    public mainImage?: string ="";
   
    public costinDoldars?: number =0;
    public description?: string = "";
    public shortDescription?: string = "";
    public duration?: number = 0;
    public hotel?: string ;
    public town?: string ;
    public hotelId?: string ;
    public townId?: string ;

   

   
    
    constructor(name: string = "name", 
        mainimage: string ="Img", 
       
        cost: number = 200, 
        desc: string ="description", 
        shortD: string = "short Description",
        dur: number = 20,
        id:string,
        town:string,
        hotel:string="hotel"
       
        
        ) {

            this.town=town;
            this.hotel=hotel;
        this.costinDoldars = cost;
        this.name = name;
        this.mainImage = mainimage;
        this.description = desc;
        
        this.shortDescription = shortD;
        this.id=id;
        this.duration=dur;
       
    }
}
export interface SelectItem {
    label: string;
    value: any;
}


export class ImageTour {
    public id?:string;
    public path?:string;
   

    constructor(path:string,id:string) {
        this.id=id;
        this.path=path;

    }
}

export class SignUpModel {
    public Email: string;
    public Password: string;
    public UserName: string;
    public Phone: string;
    public SurName: string;
    public Birth: Date;





}

export class SignInModel{
    public Email: string;
    public Password: string;


}

export class IHotelRoom {
    public  id? :string;
    public  costinDoldarsForOneDay? :number=0;
    public  type? :string="";
    public  hotel? :string;
   

    /**
     *
     */
    constructor(type="",cost=0,
    
    ) {
        this.costinDoldarsForOneDay=cost;
        this.type=type;
      
    }
}

export class IFood {
    public  costinDoldars? :number=0;
    public  type? :string;
  

   
   public  id? :string;
    public  foods? :string;
    public  description? :string;
   public  hotel? :string;
   public  hotelId? :string;


    /**
     *
     */
    constructor(type="",cost=0
    ) {
        this.costinDoldars=cost;
        this.type=type;
       
        
    }
}



export class IHotelServices {
   


    public  isFree?:boolean=true;
    public  service? :string;
    public  type? :string;
    public  id? :string; 
    public  hotel? :string;
    public  hotelId? :string;

    /**
     *
     */
    constructor(type="",service=""
    ) {
        this.service=service;
        this.type=type;
       
        
    }
}


export class FilterDTO {
    public   departureDate? :Date;
    public   arrivalDate? :Date;
    public   townid? :string;
    public   hotelid? :string;
    public   minCountNight? :number;
    public   maxCountNight? :number;


  constructor(townid="",
  minCountNight=3,
  maxCountNight=14,
  hotelid="",
  departureDate=new Date(Date.now()),
  arrivalDate=new Date(Date.now()+ 72*3600*1000)
 ) {
    

    this.hotelid=hotelid;
    this.townid=townid;
     this.arrivalDate=arrivalDate;
    this.departureDate=departureDate;
    this.minCountNight=minCountNight;
    this.maxCountNight=maxCountNight;
  }

   
 

}