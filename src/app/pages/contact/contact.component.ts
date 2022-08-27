import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  banner=[
    {
      id:1,
      img:'assets/img/breadcrumb.jpg'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
