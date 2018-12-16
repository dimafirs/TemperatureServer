import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MeasurementService} from './services/measurement.service';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {HttpClientModule} from '@angular/common/http';
import {createEpicMiddleware} from 'redux-observable';
import {AppState} from './store';
import {reducers} from './store/reducers/reducers';
import {EpicsService} from './services/epics.service';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EpicsModule} from './store/epics/epics.module';
import {MetadataService} from './services/metadata.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    AppRouting,
    BrowserAnimationsModule,
    EpicsModule
  ],
  providers:
    [MeasurementService,
      MetadataService,
      EpicsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
              private ngRedux: NgRedux<AppState>,
              private ngReduxRouter: NgReduxRouter,
              private devTools: DevToolsExtension,
              private epicsService: EpicsService) {
    const epics = this.epicsService.getEpics();
    const middleware = createEpicMiddleware();
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }
    ngRedux.configureStore(reducers, {} as AppState, [middleware, thunkMiddleware, createLogger()], enhancers);
    ngReduxRouter.initialize();
    middleware.run(epics);
  }
}
