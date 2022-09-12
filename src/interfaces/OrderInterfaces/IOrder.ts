export interface IOrder{
    // orderDate:string,
    products:IOrderProduct[]
}

export interface IOrderProduct{
    productId:string,
    quantity:number
}