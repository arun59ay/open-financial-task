import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.scss']
})
export class BusinessCardsComponent implements OnInit {
  @Input() businessConfig: [];

  constructor() { }

  ngOnInit(): void { }

}
