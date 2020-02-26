import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkOn = false

  constructor() { }

  ngOnInit() {
  }

  darkMode() {
    document.body.classList.toggle('dark')
    this.darkOn = document.body.classList.contains('dark')
  }

}
