import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HidebarService {
  private isSideBarOpen: boolean = true;

  public sideNavToggleSubject: Subject<boolean> = new Subject<boolean>();

  public toggle() {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sideNavToggleSubject.next(this.isSideBarOpen);
  }

}
