import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch-page',
  templateUrl: './merch-page.component.html',
  styleUrls: ['./merch-page.component.css']
})
export class MerchPageComponent implements OnInit {
  public products = [
    {
      name:"Natture Foundation Hoodie",
      price: 40000,
      image: "/assets/images/merch-page/hoodie.jpg"
    },
    {
      name:"Natture Foundation Cap",
      price: 15000,
      image: "/assets/images/merch-page/cap.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
