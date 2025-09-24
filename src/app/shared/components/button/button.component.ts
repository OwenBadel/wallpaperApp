import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

type ButtonType = "button" | "reset" | "submit";
type ColorType = "danger" | "dark" | "light" | "medium" | "primary" | "secondary" | "success" | "tertiary" | "warning";
type FillType = "clear" | "outline" | "solid";
type SizeType = "small" | "default" | "large";
type ShapeType = "round";
type ExpandType = "block" | "full";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType = 'button';
  @Input() color: ColorType = 'primary';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() iconSlot: 'start' | 'end' = 'start';
  @Input() fill: FillType = 'solid';
  @Input() size: SizeType = 'default';
  @Input() shape?: ShapeType;
  @Input() expand: ExpandType = 'block';

  @Output() buttonClick = new EventEmitter<void>(); // ✅ AGREGADO: Output event

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.buttonClick.emit();
  }
}