import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'ps-square-carousel',
  templateUrl: './square-carousel.component.html',
  styleUrls: ['./square-carousel.component.scss']
})
export class SquareCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    stagePadding: 30,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };

  slidesStore = [1,2,3,4,5,6,7]

constructor() { }

  ngOnInit() {
  }

}
