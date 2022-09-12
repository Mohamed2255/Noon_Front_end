import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
  }
  click()
  {
    this.router.navigate(['allsup'],{relativeTo:this.active});
  }
  Delivercompnies()
  {
    this.router.navigate(['allcompnies'],{relativeTo:this.active});
  }
}
