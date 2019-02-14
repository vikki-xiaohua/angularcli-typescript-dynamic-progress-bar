
import { NgModule, Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppService } from '../app/services/app.service';

import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { ProgressbarShowvalueComponent } from './pages/progressbar-showvalue.component';

export const routes: Routes = [
  {
  }
];


@NgModule({
  imports: [NgbModule.forRoot(), BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [AppComponent, ProgressbarShowvalueComponent],
  bootstrap: [AppComponent],
  providers: [AppService, RouterModule]
})
export class AppModule {}
