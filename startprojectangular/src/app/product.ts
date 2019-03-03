import {Data} from "@angular/router";

export class Product {
  First_name :string;
  Last_name : string;
  Assets:[
    {
      Asset_type:string;
      Asset_description :string;
      Asset_Purchase_date:Data;
      Asset_Purchase_value:number;
      Asset_Market_value:number;
      Asset_Currency:string;
      Asset_Logged_date:Data;
    }]

}
