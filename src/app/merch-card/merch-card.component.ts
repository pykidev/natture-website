import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch-card',
  templateUrl: './merch-card.component.html',
  styleUrls: ['./merch-card.component.css']
})
export class MerchCardComponent implements OnInit {
  @Input() productName !: string;
  @Input() productPrice !: number;
  @Input() imageUrl !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
