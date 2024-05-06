import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertSuccessComponent } from '../../components/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../components/alert-error/alert-error.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private matDialog = inject(MatDialog);

  success(message : string, duration : number) : void{
    const dialogRef = this.matDialog.open(AlertSuccessComponent, {
      data : { message : message }
    });

    setTimeout(() => {
      dialogRef.close();
    }, duration);
  } 

  error(message : string, duration : number) : void{
    const dialogRef = this.matDialog.open(AlertErrorComponent, {
      data : { message : message }
    });

    setTimeout(() => {
      dialogRef.close();
    }, duration);
  } 

}