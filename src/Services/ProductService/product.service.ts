import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { ICategory } from '../../interfaces/HomeInterfaces/ICategory';
import { ICompany } from '../../interfaces/ProductInterfaces/ICompany';
import { IProductAdd } from '../../interfaces/ProductInterfaces/IProductAdd';
import { IProductupdateordel } from '../../interfaces/ProductInterfaces/IProductUpdateorDel';
import { ISupCategory } from '../../interfaces/ProductInterfaces/ISupcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://localhost:5200/api/Product'
  constructor(private http: HttpClient) {
  }

  AddProduct(product:any) {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': undefined}) };
    console.log(product)
    return this.http.post(this.url + '/addnewpro', product, {headers:this.Header})

  }
  updateProduct(id: string, product: IProductAdd) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'Application/json' }) };
    return this.http.put(this.url.concat("/", id.toString()), product, httpOptions)
  }
  getAll(): Observable<IProductupdateordel[]> {
    return this.http.get<IProductupdateordel[]>(this.url+'/allpro');
  }
  deleteProduct(id: any) {

    return this.http.delete(this.url.concat("/", id.toString()))
  }
  private get Header() {
    var token = sessionStorage.getItem(TokenEnum.Token);
    return new HttpHeaders({
      'token': `${token}`
    });
  }
}
