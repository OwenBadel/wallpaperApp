import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  standalone: false,
})
export class CardComponent  implements OnInit {

  @Input() image: string = '';
  @Input() class: string = '';

  constructor() { }

  ngOnInit() {}

}