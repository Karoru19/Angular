import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sizeSidebar = 0;
  sizeContent = 204;
  hideSidebar = event => {
    if (this.sizeSidebar === -204) {
      this.sizeSidebar = 0;
      this.sizeContent = 204;
    } else {
      this.sizeSidebar = -204;
      this.sizeContent = 0;
    }
  }
}
