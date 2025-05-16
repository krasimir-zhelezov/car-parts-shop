// alert.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
  type: AlertType;
  message: string;
  duration?: number; // in milliseconds
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alertsSubject = new BehaviorSubject<Alert[]>([]);
  alerts$ = this.alertsSubject.asObservable();

  addAlert(alert: Alert) {
    const currentAlerts = this.alertsSubject.value;
    this.alertsSubject.next([...currentAlerts, alert]);
    
    if (alert.duration) {
      setTimeout(() => this.removeAlert(alert), alert.duration);
    }
  }

  removeAlert(alertToRemove: Alert) {
    const currentAlerts = this.alertsSubject.value;
    this.alertsSubject.next(currentAlerts.filter(alert => alert !== alertToRemove));
  }

  clearAlerts() {
    this.alertsSubject.next([]);
  }
}