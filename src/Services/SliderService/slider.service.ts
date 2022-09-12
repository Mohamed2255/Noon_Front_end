import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private httpClient:HttpClient) { }

  public  GetSliderImages():Observable<any>{
    return this.httpClient.get('assets/Data/Slider.json')
  }
}
