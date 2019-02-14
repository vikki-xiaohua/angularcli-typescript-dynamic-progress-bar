
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, Input } from '@angular/core';
import { EndpointResponse } from '../app/models/endpoint.model';
import { AppService } from '../app/services/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private _appService: AppService, ) {
  }

}
