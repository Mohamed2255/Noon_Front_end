import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DelivercompanySkipImportService } from 'src/Services/CompanyService/delivercompany--skip-import.service';

@Component({
  selector: 'app-delivercompanycreate',
  templateUrl: './delivercompanycreate.component.html',
  styleUrls: ['./delivercompanycreate.component.scss']
})
export class DelivercompanycreateComponent implements OnInit {
  creatcompany!:FormGroup;
  constructor(private fb:FormBuilder,private service:DelivercompanySkipImportService,private route:Router) { }

  ngOnInit(): void {
    this.creatcompany=this.fb.group({
      Name:['',[Validators.required,Validators.minLength(3)]],
      ContactNumber:['',[Validators.required,Validators.pattern("^[0-9]{11}$")]],
      Address:['',[Validators.required]]
    })
  }
  get Name()
  {
    return this.creatcompany.get("Name")
  }

  get ContactNumber()
  {
    return this.creatcompany.get("ContactNumber")
  }

  get  Address()
  {
    return this.creatcompany.get("Address")
  }


  Submitcompany()
  {
    this.service.createcompany(this.creatcompany.value).subscribe(data=>{
      this.route.navigateByUrl('dashboard/allcompnies');
    })
  }
}
