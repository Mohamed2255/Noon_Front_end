import { IProduct } from "../CategoryPageInterfaces/IProduct";
import { ISubCategory } from "./ISubCategory";

export interface ICategory{
    id:string,
    name:string,
    subCategories:ISubCategory[],
    products:IProduct[]
}