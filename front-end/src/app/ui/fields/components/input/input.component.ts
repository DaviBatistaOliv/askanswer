import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';

@Component({
  selector: 'akw-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  public label!: string;

  @Input()
  public type: 'text' | 'password' | 'email' | 'area' = 'text';

  @Input()
  public placeholder!: string;

  @Input()
  public control = new FormControl();

  @Input()
  appearance: MatFormFieldAppearance = 'outline';

  @Input()
  floatLabel: FloatLabelType = 'always';

  @Input('area-rows')
  areaRows = 1;

  constructor() {}

  ngOnInit(): void {}
}
