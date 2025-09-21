import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
   standalone: false
})
export class InputComponent  implements OnInit {

  @Input() label:string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() clear: boolean = false;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() labelPlacement: 'floating' | 'stacked' | 'fixed' | '' = '';
@Input() fill: 'solid' | 'outline' | 'clear' | '' = '';
@Input() FormController: FormControl = new FormControl();

  constructor() { } 


  ngOnInit() {}

}