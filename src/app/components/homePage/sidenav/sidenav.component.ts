import { Component, OnInit, AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,AfterContentChecked {

  currentUser = 'GUEST';

  constructor() { }

  ngOnInit() { }

  ngAfterContentChecked(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
   
  }


}
