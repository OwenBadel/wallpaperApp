import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-togglet',
  templateUrl: './toggle-t.component.html',
  styleUrls: ['./toggle-t.component.scss'],
  standalone: false,
})
export class ToggleTComponent  implements OnInit {

  @Input() value: boolean = false;
  @Input() left: string = ''
  @Input() rigth: string = ''
  @Output() valueChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  public onChange(event: any) {
    const newValue = event.detail.checked;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

}