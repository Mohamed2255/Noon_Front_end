import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { ILoginUser } from 'src/interfaces/AuthInterfaces/ILoginUser';
import { IRegisterUser } from 'src/interfaces/AuthInterfaces/IRegister';
import { IUser } from 'src/interfaces/AuthInterfaces/IUser';
import { IUserRole } from 'src/interfaces/AuthInterfaces/IUserRole';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: BehaviorSubject<boolean>={} as BehaviorSubject<boolean>;
  public userRoles: BehaviorSubject<string[]>;
  baseUrl: string = 'https://localhost:5200/api/Account/'

  constructor(private httpClinet: HttpClient) {
    this.userRoles=new BehaviorSubject<string[]>([]);
    this.init();
  }
  private init()
  {
    const token = sessionStorage.getItem(TokenEnum.Token);
    this.isLogged = new BehaviorSubject<boolean>(token ? true : false);
    if (token) {
      // convert token
      const jwtTokenData = new JwtHelperService().decodeToken(token);
      // check if role only one on the user if one will be as string
      if (typeof jwtTokenData.roles == 'string') {
        // add roles in the 
        this.userRoles = new BehaviorSubject([jwtTokenData.roles]);

      } else {
        this.userRoles = new BehaviorSubject([...jwtTokenData.roles]);

      }

    }
   
  }

  // private setUserRoles() {
  //   if (localStorage.getItem(TokenEnum.Token)) {


  //   }
  // }

  public Login(userLogin: ILoginUser): Observable<any> {
    return this.httpClinet.post(`${this.baseUrl}SignIn`, userLogin);
  }


  public LogOut() {
    sessionStorage.removeItem(TokenEnum.Token);
    sessionStorage.removeItem(TokenEnum.Expiration);
    this.isLogged.next(false)
  }

  public Register(userRegsiter: IRegisterUser): Observable<any> {
    return this.httpClinet.post(`${this.baseUrl}Register`, userRegsiter);
  }
  public GetAllusers(): Observable<IUser[]> {
    return this.httpClinet.get<IUser[]>(`${this.baseUrl}users`, {
      headers: this.Header
    });
  }
  public AddRoleToUser(userRole: IUserRole): Observable<any> {
    return this.httpClinet.post(`${this.baseUrl}addRole`, userRole, { headers: this.Header });
  }

  public RemoveRoleFromUser(userRole: IUserRole): Observable<any> {
    return this.httpClinet.delete<any>(`${this.baseUrl}removeRole`, {
      headers: this.Header,
      body: userRole
    })
  }
  public DeleteUser(userid: any) {
    // let httpheaders=new HttpHeaders()
    // .set('Content-type','application/Json');
    // let options={
    //   headers:httpheaders
    // };
    return this.httpClinet.delete(this.baseUrl + "removeUser" + "/" + userid);


  }


  private get Header() {
    var token = sessionStorage.getItem(TokenEnum.Token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

}
