import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IDeliverCompany } from 'src/interfaces/DeliverCompany/DeliverCompany';
import { DelivercompanySkipImportService } from 'src/Services/CompanyService/delivercompany--skip-import.service';

@Component({
  selector: 'app-delivercompany',
  templateUrl: './delivercompany.component.html',
  styleUrls: ['./delivercompany.component.scss']
})
export class DelivercompanyComponent implements OnInit {

  compnies:IDeliverCompany[]=[];
 
  constructor(private service:DelivercompanySkipImportService,private router:Router) { 
   
  }

  ngOnInit(): void {
this.service.getallcomponies().subscribe(data=>{
  this.compnies=data;
})
  }
  details(id:any)
  {
    this.router.navigate(['dashboard/allcompnies/details/',id])
  }
  update(item:any)
  {
    this.router.navigate(['dashboard/allcompnies/update',item])
  }
  gotocreate()
  {
    this.router.navigate(['dashboard/allcompnies/create'])
  }
  delete(id:any)
  {
    if (confirm("هل انت متأكد من هذة العملية؟")) {
      return this.service.delete(id).subscribe(response=>{
        this.service.getallcomponies().subscribe(data=>{
          this.compnies=data;
        })
      })
    }
    return null;
  }
}
