import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { EndpointResponse, BarObject } from '../../app/models/endpoint.model';
import { AppService } from '../../app/services/app.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-progressbar-showvalue',
  templateUrl: './progressbar-showvalue.component.html',
  styles: [`
  ngb-progressbar {
    margin-top: 26rem;
  }
`]
})
export class ProgressbarShowvalueComponent implements OnInit {

  endpoint: EndpointResponse;

  buttons: number[] = [];
  bars: number[] = [];
  barObjects: BarObject[] = [];
  limit: number;

  selectedProgressBar: number;

  constructor(
    private _appService: AppService,
    config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    // config.max = 100;
    config.striped = true;
    config.animated = true;
    config.height = '40px';
  }


  ngOnInit() {
    this.getEndpoint();
  }

  getEndpoint() {
    this._appService.getEndpoint().subscribe(response => {
      this.endpoint = response;

      this.buttons = response.buttons;
      this.bars = response.bars;
      this.limit = response.limit;

      console.info("this.endpoint => " + this.endpoint);
      console.info("this.buttons => " + this.buttons);
      console.info("this.bars => " + this.bars);
      console.info("this.limit => " + this.limit);

      this.convert(this.bars);

    },

    )

  }


  convert(barArray: number[]) {
    for (var i = 0; i < barArray.length; i++) {
      const barObject = new BarObject();
      barObject.barSize = barArray[i];

      if (barArray[i] <= this.limit) {
        barObject.barType = "info";
      } else {
        barObject.barType = "danger";
      }

      // console.log("barObject => " + JSON.stringify(barObject));
      this.barObjects.push(barObject);
    }
  }


  playProgressButton(buttonIndex: number) {

    // console.log("buttonIndex=> " + buttonIndex);
    // console.log("selectedProgressBar=> " + this.selectedProgressBar);
    // console.log("before => " + JSON.stringify(this.barObjects[this.selectedProgressBar]));


    this.barObjects[this.selectedProgressBar].barSize += this.buttons[buttonIndex];

    if (this.barObjects[this.selectedProgressBar].barSize <= 0) {
      this.barObjects[this.selectedProgressBar].barSize = 0;
    }

    if (this.barObjects[this.selectedProgressBar].barSize >= this.limit) {
      this.barObjects[this.selectedProgressBar].barType = "danger";
    } else {
      this.barObjects[this.selectedProgressBar].barType = "info";
    }

    // console.log("after => " + JSON.stringify(this.barObjects[this.selectedProgressBar]));

  }


  selectProgressBar(progressBarIndex: any) {

    // console.log("progressBarIndex => " + progressBarIndex);

    this.selectedProgressBar = progressBarIndex;

  }

}
