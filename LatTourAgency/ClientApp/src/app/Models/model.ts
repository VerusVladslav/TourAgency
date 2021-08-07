import { User } from "oidc-client";
import { isTemplateTail } from "typescript";

export class ApiResponse {
    public status: number;
    public message: string;

}


export class Tour {
    public id: string;
    public name: string;
    public mainImage: string;
    public grade: number;
    public costinDolars: number;
    public description: string;
    public shortDescription: string;
    public duration: number;
    public minCountofPeople: number;
    public maxCountofPeople: number;

  
    constructor(name: string, 
        mainimage: string, 
        grade: number, 
        cost: number, 
        desc: string, 
        shortD: string,
        id:string,
        dur: number, 
        minpeople: number, 
        maxpeople: number, 
        
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

export class SignInModel extends User {
    public Email: string;
    public Password: string;


}


