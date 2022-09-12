import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/AuthService/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  islogged:boolean=false;
  constructor(private authService:AuthService) {
    this.authService.isLogged.subscribe(status=>{this.islogged=status})

   }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.LogOut();
  }
}
