import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/interfaces/CategoryPageInterfaces/IProduct';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';
import { ISubCategory } from 'src/interfaces/HomeInterfaces/ISubCategory';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient:HttpClient) {

   }
   
   GetAllCategories():Observable<ICategory[]>{
      return this.httpClient.get<ICategory[]>(`${environment.BaseUrl}Category/All`);
   }
   GetAllSubCategories():Observable<ISubCategory[]>{
    return this.httpClient.get<ISubCategory[]>(`${environment.BaseUrl}SubCategory/getall`)
   }

   GetAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseUrl}product/allpro`)
   }
   GetProductById(id:string):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.BaseUrl}product/${id}`)
  }
  GetSubCategoryById(id:string):Observable<ISubCategory>{
    return this.httpClient.get<ISubCategory>(`${environment.BaseUrl}SubCategory/${id}`)
  }

}
