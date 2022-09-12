import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeliverCompany } from 'src/interfaces/DeliverCompany/DeliverCompany';
import { DelivercompanySkipImportService } from 'src/Services/CompanyService/delivercompany--skip-import.service';

@Component({
  selector: 'app-delivercompanyupdate',
  templateUrl: './delivercompanyupdate.component.html',
  styleUrls: ['./delivercompanyupdate.component.scss']
})
export class DelivercompanyupdateComponent implements OnInit {

  updatecompany!:FormGroup
  id!:any;
  constructor(private fb:FormBuilder,private service:DelivercompanySkipImportService,private active:ActivatedRoute,private router:Router) {
    this.id=this.active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.service.details(this.id).subscribe(company=>{
      this.updatecompany=this.fb.group({
        Name:[company['name'],[Validators.required,Validators.minLength(3)]],
        ContactNumber:[company['contactNumber'],[Validators.required,Validators.pattern("^[0-9]{11}$")]],
        Address:[company['address'],[Validators.required]]
      })
    })
  }
  get Name()
  {
    return this.updatecompany.get("Name")
  }

  get ContactNumber()
  {
    return this.updatecompany.get("ContactNumber")
  }

  get  Address()
  {
    return this.updatecompany.get("Address")
  }
  Updatecompany()
  {
    this.service.update(this.id,this.updatecompany.value).subscribe(data=>{
      this.router.navigateByUrl('/dashboard/allcompnies');
    })  
  }

}
