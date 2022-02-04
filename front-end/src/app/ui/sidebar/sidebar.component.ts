import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faQuestion,
  faTags,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'akw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  readonly fa = {
    faSearch,
    faQuestion,
    faTags,
    faMedal,
  };

  constructor() {}

  ngOnInit(): void {}
}
