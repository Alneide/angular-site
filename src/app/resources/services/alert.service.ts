import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string): void {
    this.showAlert({ title, message, icon: 'success' });
  }

  public info(message: string, title?: string): void {
    this.showAlert({ title, message, icon: 'info' });
  }

  public error(message: string, title?: string): void {
    this.showAlert({ title, message, icon: 'error' });
  }

  private showAlert({ title, message, icon }: { title?: string; message: string; icon: SweetAlertIcon; }): void {
    Swal.fire(title, message, icon);
  }

}
