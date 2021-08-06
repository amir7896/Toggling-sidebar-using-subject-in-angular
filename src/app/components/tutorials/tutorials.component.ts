import { Component, OnInit } from '@angular/core';
import { TutorialsService } from 'src/app/services/Tutorials/tutorials.service';
@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  tutorials:any;
  constructor(private _tutorialService: TutorialsService) { }

  ngOnInit(): void {
    this.gettutorials();
  }

  gettutorials(){
    this._tutorialService.getTutorials().subscribe(res => {
      this.tutorials =res;
      console.log(this.tutorials)
    })
  }

}
