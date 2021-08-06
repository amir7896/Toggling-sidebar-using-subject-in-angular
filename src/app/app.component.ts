import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChartProject';

  subMenuState:boolean = false;
  burgerClicked(evnt:any){
    this.subMenuState = evnt;
    //console.log("inside burgerClicked: pls. change showMenu to be:",this.subMenuState);
  }

}
