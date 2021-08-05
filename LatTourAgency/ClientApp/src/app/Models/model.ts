import { User } from "oidc-client";
import { isTemplateTail } from "typescript";

export class ApiResponse {
    public status: number;
    public message: string;

}


export class Tour {
    public id: string;
    public name: string;
    public mainimage: string;
    public grade: number;
    public costindoldars: number;
    public description: string;
    public shortdescription: string;

    constructor(name: string, mainimage: string, grade: number, cost: number, desc: string, shortD: string) {
        this.costindoldars = cost;
        this.name = name;
        this.mainimage = mainimage;
        this.description = desc;
        this.grade = grade;
        this.shortdescription = shortD;
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


