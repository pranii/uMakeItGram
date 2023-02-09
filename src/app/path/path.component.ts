import { Component, OnInit } from '@angular/core';
import { lifeMaxBarValue, lifeStartValue } from '../model/text';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {
  
  barValue: number = lifeStartValue;
  maxBarValue: number = lifeMaxBarValue;
  showText: string = "";
  text: string = "WÄHLE AUS.";
  textStep: number = 0;

  source;

  barStyle = {
    width: (this.maxBarValue/100)*this.barValue + '%'
  }

  constructor(private router: Router) {
    this.source = setInterval(() => {this.showText =  this.text.slice(0,this.textStep); this.textStep++}, 5);
   }

  ngOnInit(): void {
  }

  nextStep() {
    this.router.navigate(['/text-game'])
  }


}
