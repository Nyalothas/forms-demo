import { Component, OnInit, Input } from '@angular/core';
import { INotification } from './models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input('type') notificationType: string;
  @Input('message') notificationMessage: string;

  notification: INotification = {
    title: '',
    message: '',
    color: '',
    borderColor: ''
  }

  constructor() { }

  ngOnInit() {
    this.notification.message = this.notificationMessage;
    this.setNotificationType();
  }

  setNotificationType() {
    switch (this.notificationType) {
      case 'error':
        this.setNotificationError();
        break;
      default:
        this.setNotificationError();
        break;
    }
  }

  setNotificationError() {
    this.notification.title = 'Error!';
    this.notification.color = 'rgba(241, 169, 160, 1)';
    this.notification.borderColor = 'red';
  }

}
