import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { environment } from 'src/environments/environment';
import { IDeliverCompany } from 'src/interfaces/DeliverCompany/DeliverCompany';

@Injectable({
  providedIn: 'root'
})
export class DelivercompanySkipImportService {

  constructor(private http:HttpClient) { }
   //get all sup categories
   getallcomponies() :Observable<IDeliverCompany[]>
   {
     return this.http.get<IDeliverCompany[]>(`${environment.url}allDeliverCompanies`);
   }
   //show details for Company
   details(id:any):Observable<IDeliverCompany>
   {
     return this.http.get<IDeliverCompany>(`${environment.url}allDeliverCompanies/`+id);
   }
   //create DeliverCompany
   createcompany(model:any):Observable<any>
   {
     return this.http.post<any>(`${environment.url}AddNew`,model,{headers:this.Header});
   }
  
   update(id:IDeliverCompany,item:any)
   {
     return this.http.put(`${environment.url}edit/`+id,item);
   }
   //Delete  Delivercompany
   delete(id:any)
   {
     return this.http.delete(environment.url+id);
   }

   private get Header() {
    var token = sessionStorage.getItem(TokenEnum.Token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'token': `${token}`
    });
  }
}
