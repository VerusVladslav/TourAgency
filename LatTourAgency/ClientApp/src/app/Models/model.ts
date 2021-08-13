import { User } from "oidc-client";
import { isTemplateTail } from "typescript";

export class ApiResponse {
    public status?: number;
    public message?: string;

}

export class Hotel {

  

    public id?: string = "";
    public name?: string = "";
    public mainImage?: string ="";
    public stars?: number = 0;
    public address?: string ="";
    public description?: string = "";
  
    public town?: string = "";
  
  
   
    
    constructor( 
        name: string = "name", 
        mainimage: string ="Img", 
        stars: number= 5,
        town: string = "town",
        id:string = "randmid",
        address: string = "adress", 
        desc: string ="description"
        
      
      
      
        ) {


        this.address = address;
        this.name = name;
        this.mainImage = mainimage;
        this.description = desc;
        this.stars = stars;
      
        this.id=id;
        this.town=town;
      

    }
}

export class Town {

    public id?: string = "";
    public name?: string = "";
    
    constructor( 
        name: string = "name",       
        id:string = "randmid",
 
        ) {
      
        this.name = name;     
        this.id=id;    

    }
}
export class Tour {
    public id?: string = "";
    public name?: string = "";
    public mainImage?: string ="";
    public grade?: number = 0;
    public costinDolars?: number =0;
    public description?: string = "";
    public shortDescription?: string = "";
    public duration?: number = 0;
    public minCountofPeople?: number = 0;
    public maxCountofPeople?: number = 0;

   
    
    constructor(name: string = "name", 
        mainimage: string ="Img", 
        grade: number= 5, 
        cost: number = 200, 
        desc: string ="description", 
        shortD: string = "short Description",
        id:string = "randomID",
        dur: number = 20, 
        minpeople: number = 1, 
        maxpeople: number = 10, 
        
        ) {


        this.costinDolars = cost;
        this.name = name;
        this.mainImage = mainimage;
        this.description = desc;
        this.grade = grade;
        this.shortDescription = shortD;
        this.id=id;
        this.duration=dur;
        this.maxCountofPeople=maxpeople;
        this.minCountofPeople=minpeople;
    }
}
export interface SelectItem {
    label: string;
    value: any;
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


