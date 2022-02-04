import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'akw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input()
  disabled!: boolean;

  @Input()
  isBlocked!: boolean;

  @Input()
  classlist!: string;

  constructor() {}

  ngOnInit(): void {}
}
