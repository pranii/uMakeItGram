import { Component, OnInit } from '@angular/core';
import { lifeMaxBarValue, lifeStartValue } from '../model/text';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  path: string = environment.assetUrl;
  fashionPath: string = "../../" + this.path + "/fashion.png";
  sportPath: string = "../../" + this.path + "/sport.png";
  musicPath: string = "../../" + this.path + "/music.png";

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

