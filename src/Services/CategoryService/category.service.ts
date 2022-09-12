import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  GetCategoryById(categoryId:string):Observable<ICategory>{
    return this.httpClient.get<ICategory>(`${environment.BaseUrl}category/${categoryId}`);
  }

}
