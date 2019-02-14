import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressbarShowvalueComponent } from './progressbar-showvalue.component';
import { AppService } from '../../app/services/app.service';
import { EndpointResponse, BarObject } from '../../app/models/endpoint.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';


describe('ProgressbarShowvalueComponent', () => {
  let component: ProgressbarShowvalueComponent;
  let fixture: ComponentFixture<ProgressbarShowvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarShowvalueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarShowvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test get data from endpoint
  it('should should get data from endpoint', () => {
    const endpointResponse = new EndpointResponse();
    endpointResponse.bars = [10, 20, 30];
    endpointResponse.buttons = [4, 2, 1];
    endpointResponse.limit = 100;

    // test service
    const appSvcInstance = TestBed.get(AppService);
    spyOn(appSvcInstance, 'getEndpoint').and.returnValue(Observable.of(endpointResponse));

    expect(appSvcInstance.getEndpoint).toHaveBeenCalledWith();
    expect(component.endpoint).not.toEqual(null);
    expect(component.buttons).not.toEqual(null);
    expect(component.bars).not.toEqual(null);

    //  test component 
    component.getEndpoint();
    expect(component.endpoint).not.toEqual(null);
    expect(component.limit).toEqual(jasmine.any(Number));

    expect(component.limit).toBeGreaterThan(0);

  });


  //test convert method
  it('should should convert', () => {
    component.bars = [1, 2, 3];
    component.convert(component.bars);

    expect(component.barObjects).not.toEqual(null);

  });


  //test playProgressButton method
  it('should should play progress button', () => {

    component.buttons = [0, 1, 2, 3];

    var buttonIndex: number = 0;

    component.playProgressButton(buttonIndex);

    expect(component.barObjects).not.toEqual(null);

  });

});
