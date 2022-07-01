import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [ngClass]= "'clear'" [ngStyle]="{'background-color':color}">{{label}}</button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() color!:string;
  @Input() label!:string;
}
