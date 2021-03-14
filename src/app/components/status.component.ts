import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../models/ITeam';

@Component({
  selector: 'app-status',
  template: `
      <span id="circle" (click)="handleClick()"
            [tooltip]="status | titlecase"
            [class]="getIconClass()">
      </span>
  `,
  styles: [
    `
        #circle {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            margin: auto;
          }

        .No-Action-Taken {
            background: grey;
        }
    `
  ]
})
export class StatusComponent {

  @Input() status: Status = 'No-Action-Taken';
  @Input() isDisabled: boolean = false;

  @Output() statusChanged = new EventEmitter<Status>();

  handleClick(): void {
    if (this.isDisabled) {
      return;
    }

    if (this.status === 'No-Action-Taken') {
      this.statusChanged.emit('Approved');
    }
    if (this.status === 'Approved') {
      this.statusChanged.emit('Not Approved');
    }
    if (this.status === 'Not Approved') {
      this.statusChanged.emit('No-Action-Taken');
    }
  }

  getIconClass() {
    if (this.status === 'Approved') {
      return 'bi bi-check-circle text-success' ;
    }
    if (this.status === 'Not Approved') {
      return 'bi bi-x-circle text-danger';
    }
    return this.status;
  }

}
