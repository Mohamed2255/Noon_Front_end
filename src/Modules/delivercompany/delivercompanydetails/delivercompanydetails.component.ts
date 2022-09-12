import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeliverCompany } from 'src/interfaces/DeliverCompany/DeliverCompany';
import { DelivercompanySkipImportService } from 'src/Services/CompanyService/delivercompany--skip-import.service';

@Component({
  selector: 'app-delivercompanydetails',
  templateUrl: './delivercompanydetails.component.html',
  styleUrls: ['./delivercompanydetails.component.scss']
})

export class DelivercompanydetailsComponent implements OnInit {
  id:any;
  data!:IDeliverCompany
  constructor(private service:DelivercompanySkipImportService,private active:ActivatedRoute) { 
    this.id=this.active.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.service.details(this.id).subscribe(comp=>{
      this.data=comp;
    })

  
  }

}
