import { Component, OnDestroy, Inject,ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

export interface PeriodicElement {
  user: string;
  id: any;
  location: any;
}
export interface DialogData {
  animal: string;
  name: string;
 

}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'W012A3CDE', user: 'Egon Spengler', location:'America/Los Angeles'},
  {id: 'W07QCRPA4', user: 'Glinda Southgood', location:'Asia/Kolkatta'},


];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fullthrottle';
  displayedColumns: string[] = ['id', 'user', 'location'];
  dataSource = ELEMENT_DATA;
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  constructor(

    public dialog: MatDialog,

    
){}
  openDialog() {
    const dialogRef = this.dialog.open(Data1Dialog,
      {
        height: '500px',
        width: '1800px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'data1dialog',
  templateUrl: './data1dialog.html',
})

export class Data1Dialog implements OnDestroy {
  product: any;
  show=false;
  show1=false;
  pageType: string;
  productForm: FormGroup;
  buttonName: string;
  eventClick(event){
    console.log(event);
  }
  custompasscode='Enter a Passcode';
refInterValID: any;
  _formBuilder: any;

  constructor(
    public dialogRef: MatDialogRef<Data1Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    onNoClick(): void {
      this.dialogRef.close();
    }

 
date(){
  this.show=this.show?false:true


  console.log(this.show)

}
date1(){
  this.show1=this.show1?false:true
if(this.show1)
{
  this.buttonName = ''

  console.log(this.show1)
}
}

ngOnInit(): void
{



  

}

createProductForm(): FormGroup
{
    return this._formBuilder.group({
                            

   
   
      passcode:[this.product.passcode],
      custompasscode:[this.product.custompasscode],


    });
}
ngOnDestroy(): void
{
    if (this.refInterValID) {

        clearInterval(this.refInterValID);
      }

   
}


}
