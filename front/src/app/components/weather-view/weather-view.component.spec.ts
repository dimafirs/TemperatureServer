import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherViewComponent } from './weather-view.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Measurement} from '../../model/Measurement';
import {MeasurementService} from '../../services/measurement.service';

class MockMeasurementService {
  fetchMeasuremenrs(): Observable<Measurement[]> {
    return of([{id: 0, temperature: 0, measurementTime: null} as Measurement]);
  }
}

describe('WeatherViewComponent', () => {
  let component: WeatherViewComponent;
  let fixture: ComponentFixture<WeatherViewComponent>;

  const spyMeasurementServiceFetch = () => {
    return of([{id: 0, temperature: 0, measurementTime: null} as Measurement]);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherViewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MeasurementService, useClass: MockMeasurementService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject mock', () => {
    expect(component.measurementService).toBeDefined();
  });
});
