import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MadBasicButton } from '../mad-basic-button';

@Component({
  selector: 'mad-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.css'],
})
export class OutlineButtonComponent extends MadBasicButton {
  @Input()
  type: string;

  @Input()
  disabled: boolean;

  @Input()
  title = '';

  @ViewChild('btn', { read: ElementRef, static: true }) button: ElementRef;

  constructor() {
    super();
    super.button = this.button;
    super.disabled = this.disabled;
  }
}
