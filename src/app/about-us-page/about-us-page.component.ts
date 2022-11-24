import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {
  public teamMembers: Array<any> = [
    {
      name:"Asimwe Anold Joseph",
      position:"Member",
      imageUrl:"/assets/images/about-us-page/anold.jpg"
    },
    {
      name:"Nansimbi Allen",
      position:"Member",
      imageUrl:"/assets/images/about-us-page/allen.jpg"
    },
    {
      name:"Olga Esther Akello",
      position:"Member",
      imageUrl:"/assets/images/about-us-page/olga.jpg"
    },
    {
      name:"Peace Ekinomu",
      position:"Member",
      imageUrl:"/assets/images/about-us-page/peace.jpg"
    },
    {
      name:"Joanna Joyce Orem",
      position:"Member",
      imageUrl:"/assets/images/about-us-page/joanna.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
