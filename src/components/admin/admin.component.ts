import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'admin page';
  }
}
