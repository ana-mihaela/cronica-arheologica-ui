import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent {

  @Input() title: string;
  @Input() iconClass: string;
  @Input() isValid: boolean = true;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  isDisabled: boolean = true;

  @Input()
  set isActive(value: boolean) {
    this._isActive = value;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }
}
