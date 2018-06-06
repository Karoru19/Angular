import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter<any>();

  query: string;

  hide() {
    this.hideSidebar.emit(null);
  }

  constructor(private router: Router, public historyService: HistoryService) {}

  goSearch() {
    if (this.query !== '') {
      this.router.navigate(['/videos', { query: this.query }]);
    }
  }

  ngOnInit() {}
}
