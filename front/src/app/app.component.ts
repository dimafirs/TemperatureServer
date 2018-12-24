import {Component, HostBinding} from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/components/app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classes = 'application mat-app-background';
  @select(['metadata', 'currentVersion'])
  currentVersion: string;
}
