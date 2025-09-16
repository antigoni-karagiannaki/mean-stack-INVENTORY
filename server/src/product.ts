import * as mongodb from "mongodb";
export interface Product {
    name: string;
    position: string;
    type: "beer" | "wine" | "softdrink";
    description: string;
    selling_price: number;
    

    _id?: mongodb.ObjectId;
}