import { Component, OnInit,DoCheck } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public identity;

  constructor(
    private userService :UserService
  ) {

    

   }

  ngOnInit() {
    this.identity = this.userService.get_identity();
  }

  ngDoCheck()
  {
    this.identity = this.userService.get_identity();
  }

}
