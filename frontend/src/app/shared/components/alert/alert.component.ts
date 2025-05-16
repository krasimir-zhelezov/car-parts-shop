import { Component } from '@angular/core';
import { AlertService } from './alert.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ui-alert',
  imports: [NgFor, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  alerts: any[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.alerts$.subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  remove(alert: any) {
    this.alertService.removeAlert(alert);
  }
}
