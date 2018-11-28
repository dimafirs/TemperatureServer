import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/components/app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classes = 'application mat-app-background';
  title = 'weatherobserver';
}
