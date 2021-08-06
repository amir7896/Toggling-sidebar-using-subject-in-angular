import { AfterViewInit, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HidebarService } from 'src/app/services/HideBar/hidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges, AfterViewInit {
 

  open:boolean = true;
  isLoaded: boolean = false;

  toggleSubscription: Subject<boolean> = this.hidebarService.sideNavToggleSubject;

  constructor(private hidebarService : HidebarService) { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
   
  }
 
 
  ngAfterViewInit(): void {
    
  }


  ngOnInit(): void {
    this.toggleSubscription.subscribe((res: boolean) => {
      this.open=res;
    })
  }

  toggeling(){
    this.hidebarService.toggle()
  }

}



