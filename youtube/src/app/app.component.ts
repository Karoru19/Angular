import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sidebar = true;
  hideSidebar = event => {
    this.sidebar = !this.sidebar;
  }
}
