import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent ,Data1Dialog} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    Data1Dialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule
,MatDialogModule ,
MatFormFieldModule,
MatDatepickerModule ,

MatNativeDateModule],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [Data1Dialog],

})
export class AppModule { }
