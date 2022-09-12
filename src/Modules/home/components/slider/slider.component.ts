import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/Services/SliderService/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliderImages:any=[
    {
        id:1,
        url:"1.webp"
    },
    {
        id:2,
        url:"2.webp"
    },
    {
        id:3,
        url:"3.webp"
    },
    {
        id:4,
        url:"4.webp"
    },
    {
        id:5,
        url:"5.webp"
    },
    {
        id:6,
        url:"6.webp"
    },
    {
        id:7,
        url:"7.webp"
    }
    ,
    {
        id:8,
        url:"6.webp"
    }
    
]
  constructor(private sliderService:SliderService) {

   }

  ngOnInit(): void {
      // this.sliderService.GetSliderImages().subscribe(data=>{
      //   this.sliderImages=data;
        
      // },error=>{
      //   console.log(error)
      // })
  }


}
