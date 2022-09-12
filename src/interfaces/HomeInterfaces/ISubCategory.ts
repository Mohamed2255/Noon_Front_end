import { IProduct } from "../CategoryPageInterfaces/IProduct";

export interface ISubCategory{
    subCategoryId:string,
    subCategoryImage:string,
    subCategoryName:string,
    products:IProduct[]
}