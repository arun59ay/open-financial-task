import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login = {
    styles: {
      marginLeft: '30px',
      marginRight: '10px',
    },
    text: 'Login',
    type: 'button',
  };
  getStarted = {
    styles: {
      marginLeft: '10px',
    },
    text: 'Get Started',
    type: 'button',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onClickEventReceived(event) {
    console.log(event);

  }

}
