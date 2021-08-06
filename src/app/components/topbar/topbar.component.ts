import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';
import { HidebarService } from 'src/app/services/HideBar/hidebar.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers:[HidebarService]
})
export class TopbarComponent implements OnInit {



  constructor(public authService: AuthserviceService,
    private sidebarService: HidebarService) {}


  ngOnInit(): void {
    
  }
  
  clickMenu() {
    this.sidebarService.toggle();
  }


  

}
