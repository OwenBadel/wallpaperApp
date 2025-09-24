import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type InputType = "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent implements OnInit {

  @Input() type: InputType = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl(); // ✅ CORREGIDO: Control por defecto
  @Input() clear: boolean = false;
  @Input() required: boolean = false;

  constructor() { }

  ngOnInit() {
    // ✅ AGREGADO: Validación inicial
    if (!this.control) {
      this.control = new FormControl('');
    }
  }
}